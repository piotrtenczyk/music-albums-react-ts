import { useEffect, useState } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import {
  getAlbumsFromItunesAlbumData,
  ItunesAlbumDataEntry,
} from "./itunesDataTransformer";
import { fetchSalesIfNotPresent } from "../../state/sales/salesActions";
import { useAppDispatch } from "../../state/stateHooks";

const addDelay = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};

interface ItunesTopAlbumsResponseData {
  feed: {
    entry: ItunesAlbumDataEntry[];
  };
}

const ItunesAlbumList = () => {
  const [albumDataEntries, setAlbumDataEntries] = useState<
    ItunesAlbumDataEntry[] | null
  >(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      const fetchResponse = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );

      await addDelay();

      const fetchedData =
        (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

      console.log({ fetchedData });
      setAlbumDataEntries(fetchedData.feed.entry);
    };

    fetchAndSetAlbums();
    dispatch(fetchSalesIfNotPresent);
  }, []);

  const albumData = albumDataEntries
    ? getAlbumsFromItunesAlbumData(albumDataEntries)
    : [];

  const albumComponents = albumData?.map((album) => {
    return (
      <Album
        id={album.id}
        key={album.id}
        number={album.number}
        coverImageUrl={album.coverImageUrl}
        description={album.description}
      />
    );
  });

  return (
    <>
      <PageTitle title="Top Albums" />
      <CircleLoader show={albumDataEntries === null} />
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;
