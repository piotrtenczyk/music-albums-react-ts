import {
  AlbumPresentationData,
  getAlbumsFromItunesAlbumData,
  ItunesAlbumDataEntry,
} from "../itunesDataTransformer";

describe("itunesDataTransformer.ts", () => {
  it("getAlbumsFromItunesAlbumData returns expected array", () => {
    const result = getAlbumsFromItunesAlbumData([]);
    expect(result).toEqual([]);
  });

  it("getAlbumsFromItunesAlbumData returns expected array", () => {
    const albumDataEntries: ItunesAlbumDataEntry[] = [
      {
        id: {
          attributes: {
            "im:id": "123123",
          },
        },
        "im:name": {
          label: "Slim Shady",
        },
        "im:artist": {
          label: "Eminem",
        },
        "im:price": {
          label: "$9.99",
          attributes: {
            amount: "9.99",
          },
        },
      },
      {
        id: {
          attributes: {
            "im:id": "22222",
          },
        },
        "im:name": {
          label: "Nevermind",
        },
        "im:artist": {
          label: "Nirvana",
        },
        "im:price": {
          label: "$15.99",
          attributes: {
            amount: "15.99",
          },
        },
      },
    ];

    const result = getAlbumsFromItunesAlbumData(albumDataEntries);
    expect(result.length).toEqual(2);

    const expectedPresentationDataArray: AlbumPresentationData[] = [
      {
        id: "123123",
        number: 1,
        coverImageUrl: "",
        description: {
          title: "Slim Shady",
          artist: "Eminem",
          price: 9.99,
        },
      },
      {
        id: "22222",
        number: 2,
        coverImageUrl: "",
        description: {
          title: "Nevermind",
          artist: "Nirvana",
          price: 15.99,
        },
      },
    ];

    expect(result).toEqual(expectedPresentationDataArray);
  });
});
