import { render } from "@testing-library/react";
import AlbumImage from "../AlbumImage";

describe("AlbumImage.tsx", () => {
  it("matches snapshot when imageUrl is undefined", () => {
    const { container } = render(<AlbumImage imageUrl={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
