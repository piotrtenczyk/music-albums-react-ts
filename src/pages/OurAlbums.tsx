// Jak wyswietlic nasze albumy?
// Czy to będzie łatwiejsze do zrobienia niz Itunes Albums ? Czy moze trudniejsze

import { useEffect, useState } from "react";
import CircleLoader from "../common/CircleLoader";
import Album from "../common/musicAlbum/Album";
import PageTitle from "../common/PageTitle";
import fakeFetch from "../dataMocking/fakeFetch";
import {
  AlbumRawData,
  default as albumsMockedData,
} from "../dataMocking/ourMusicalAlbumsDataMock";

const OurAlbums = () => {
  const [albumsData, setAlbumsData] = useState<null | AlbumRawData[]>(null);

  useEffect(() => {
    const fetchOurAlbums = async () => {
      const fetchedAlbumData = await fakeFetch(albumsMockedData);
      setAlbumsData(fetchedAlbumData);
    };

    fetchOurAlbums();
  }, []);

  const albumsComponents = albumsData?.map((album, index) => {
    const albumDescription = {
      title: album.title,
      artist: album.author,
      price: 9.99,
    };

    return (
      <Album
        id={album.id}
        key={index}
        number={index + 1}
        coverImageUrl={album.imageUrl}
        description={albumDescription}
      />
    );

    // return (
    //   <ItunesAlbum place={index + 1} albumDataEntry={tempAlbumDataEntry} />
    // );
  });

  return (
    <>
      <PageTitle title="Our Favourites" />
      <CircleLoader show={albumsData === null} />
      {albumsComponents}
    </>
  );
};

export default OurAlbums;
