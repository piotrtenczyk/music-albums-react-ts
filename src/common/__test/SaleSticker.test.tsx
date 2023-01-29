import { render } from "@testing-library/react";
import SaleSticker from "../SaleSticker";

describe("SaleSticker.tsx", () => {
  it("matches snapshot when show is true", () => {
    const { container } = render(
      <SaleSticker show={true} value={40}></SaleSticker>
    );
    expect(container).toMatchSnapshot();
  });

  describe("renders sale sticker when appropraite", () => {
    it("shows sale sticker with 40% off", () => {
      const { queryByText } = render(
        <SaleSticker show={true} value={40}></SaleSticker>
      );

      const textQueryResult = queryByText("40% Off!");
      expect(textQueryResult).toBeInTheDocument();
    });

    it("does NOT shows sale sticker with 40% off", () => {
      const { queryByText } = render(
        <SaleSticker show={false} value={40}></SaleSticker>
      );

      const textQueryResult = queryByText("40% Off!");
      expect(textQueryResult).toEqual(null);
    });
  });
});
