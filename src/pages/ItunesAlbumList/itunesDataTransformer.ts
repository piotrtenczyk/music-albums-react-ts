import { AlbumProps } from "../../common/musicAlbum/Album";

interface ObjectWithlabel {
  label: string;
}

interface PriceObject {
  label: string;
  attributes: {
    amount: string;
  };
}

interface IdObject {
  attributes: {
    "im:id": string;
  };
}

export interface ItunesAlbumDataEntry {
  id: IdObject;
  "im:name": ObjectWithlabel;
  "im:artist": ObjectWithlabel;
  "im:price"?: PriceObject;
  "im:image"?: ObjectWithlabel[];
}

export const getAlbumsFromItunesAlbumData = (
  itunesAlbumEntries: ItunesAlbumDataEntry[]
): AlbumProps[] => {
  const transformedData = itunesAlbumEntries.map((itunesAlbum, index) => {
    const priceValueFromItunes = itunesAlbum?.["im:price"]?.attributes.amount;

    return {
      id: itunesAlbum.id.attributes["im:id"],
      number: index + 1,
      coverImageUrl: itunesAlbum?.["im:image"]?.[2]?.label || "",
      description: {
        title: itunesAlbum["im:name"].label,
        artist: itunesAlbum["im:artist"].label,
        price: Number(priceValueFromItunes),
      },
    };
  });

  return transformedData;
};
