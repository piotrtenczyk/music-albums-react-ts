import { useEffect, useState } from "react";
import CircleLoader from "../common/CircleLoader";
import Album from "../common/musicAlbum/Album";
import PageTitle from "../common/PageTitle";
import fakeFetch from "../dataMocking/fakeFetch";
import {
  AlbumRawData,
  default as albumsMockedData,
} from "../dataMocking/ourMusicalAlbumsDataMock";
import {
  getDiscountForItem,
  getDiscountPercentForItemId,
} from "../dataMocking/salesDataMock";
import { fetchSalesIfNotPresent } from "../state/sales/salesActions";
import { useAppDispatch, useAppSelector } from "../state/stateHooks";

const OurAlbums = () => {
  const [albumsData, setAlbumsData] = useState<null | AlbumRawData[]>(null);

  const dispatch = useAppDispatch();
  const salesInformation = useAppSelector((state) => state.sales.data);

  useEffect(() => {
    const fetchOurAlbums = async () => {
      const fetchedAlbumData = await fakeFetch(
        albumsMockedData,
        "albumsMockedData"
      );
      setAlbumsData(fetchedAlbumData);
    };

    fetchOurAlbums();
    dispatch(fetchSalesIfNotPresent);
  }, [dispatch]);

  const albumsComponents = albumsData?.map((album, index) => {
    const albumDescription = {
      title: album.title,
      artist: album.author,
      price: 9.99,
    };
    const salesItem = {
      id: album.id,
      value: albumDescription.price,
    };

    const discountForAlbum = getDiscountForItem(salesItem, salesInformation);

    return (
      <Album
        id={album.id}
        key={index}
        number={index + 1}
        coverImageUrl={album.imageUrl}
        description={albumDescription}
        discountValue={discountForAlbum}
      />
    );
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
