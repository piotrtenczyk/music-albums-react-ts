import { useEffect } from "react";
import Album from "../../common/musicAlbum/Album";
import CircleLoader from "../../common/CircleLoader";
import PageTitle from "../../common/PageTitle";
import { fetchAlbumsThunk } from "../../state/itunesAlbums/itunesAlbumsActions";
import { useAppDispatch, useAppSelector } from "../../state/stateHooks";
import { fetchSalesIfNotPresent } from "../../state/sales/salesActions";
import { GREATER_THEN } from "../../dataMocking/salesDataMock";

const ItunesAlbumList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAlbumsThunk);
    dispatch(fetchSalesIfNotPresent);
  }, [dispatch]);

  const presentationData = useAppSelector(
    (state) => state.itunesAlbums.presentationData
  );

  const sales = useAppSelector((state) => state.sales);

  const albumComponents = presentationData.data.map((album) => {
    // Business rule: Itunes album can only go on sale if a rule based sale is present

    const ruleBasedSale = sales.data?.find((sale) => !!sale.rule);
    const isOnSale =
      ruleBasedSale?.rule?.type === GREATER_THEN &&
      album.description.price > ruleBasedSale?.rule?.value;
    const saleValue = ruleBasedSale?.amountInPercent;

    return (
      <Album
        saleValue={isOnSale ? saleValue : undefined}
        key={album.number}
        number={album.number}
        coverImageUrl={album.coverImageUrl}
        description={album.description}
      />
    );
  });

  return (
    <>
      <PageTitle title="Top Albums" />
      <CircleLoader show={presentationData.loading && sales.loading} />
      {albumComponents}
    </>
  );
};

export default ItunesAlbumList;
