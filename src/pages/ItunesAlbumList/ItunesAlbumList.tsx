import { useEffect, useState } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import {
  getAlbumsFromItunesAlbumData,
  ItunesAlbumDataEntry,
} from "./itunesDataTransformer";
import { fetchSalesIfNotPresent } from "../../state/sales/salesActions";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import { getDiscountForItem } from "../../dataMocking/salesDataMock";

const addDelay = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(null);
    }, 1000)
  );
};

export interface ItunesTopAlbumsResponseData {
  feed: {
    entry: ItunesAlbumDataEntry[];
  };
}

const ItunesAlbumList = () => {
  const [albumDataEntries, setAlbumDataEntries] = useState<
    ItunesAlbumDataEntry[] | null
  >(null);

  const dispatch = useAppDispatch();
  const salesInformation = useAppSelector((state) => state.sales.data);

  useEffect(() => {
    const fetchAndSetAlbums = async () => {
      const fetchResponse = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );
      const fetchedData =
        (await fetchResponse.json()) as ItunesTopAlbumsResponseData;

      setAlbumDataEntries(fetchedData.feed.entry);
    };

    fetchAndSetAlbums();
    dispatch(fetchSalesIfNotPresent);
  }, []);

  const albumData = albumDataEntries
    ? getAlbumsFromItunesAlbumData(albumDataEntries)
    : [];

  const albumComponents = albumData?.map((album) => {
    const salesItem = {
      id: album.id,
      value: album.description.price,
    };
    const discountForAlbum = getDiscountForItem(salesItem, salesInformation);

    return (
      <Album
        id={album.id}
        key={album.id}
        number={album.number}
        coverImageUrl={album.coverImageUrl}
        description={album.description}
        discountValue={discountForAlbum}
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
