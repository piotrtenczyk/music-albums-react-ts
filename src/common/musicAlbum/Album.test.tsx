import { render } from "@testing-library/react";
import Album from "./Album";

describe("Album.tsx", () => {
  it("matches snapshot", () => {
    const testAlbumDescription = {
      title: "Placz Kotku",
      artist: "Behemot",
      price: 666,
    };

    const { container } = render(
      <Album
        id={"konkursowe123"}
        number={666}
        coverImageUrl={"https://m.media-amazon.com/images/I/614ub5HQC2L.jpg"}
        description={testAlbumDescription}
      />
    );
    expect(container).toMatchSnapshot();

    // Zadanie : spojrz na error generowany przez ten test. Czy error daje nam znac, z czym wiaze sie problem?
  });
});
