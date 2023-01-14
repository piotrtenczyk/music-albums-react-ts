// Jak wyswietlic nasze albumy?
// Czy to będzie łatwiejsze do zrobienia niz Itunes Albums ? Czy moze trudniejsze

import { useEffect, useState } from "react";
import Album from "../common/musicAlbum/Album";
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
    const albumDescription = { title: album.title, artist: album.author };

    return (
      <Album
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

  return <>{albumsComponents}</>;
};

export default OurAlbums;
