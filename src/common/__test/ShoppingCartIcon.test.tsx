import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartIcon from "../ShoppingCartIcon";

describe("ShoppingCartIcon.tsx", () => {
  it("zero is not rendered numberOfItems is 0", () => {
    const { queryByTestId } = render(<ShoppingCartIcon numberOfItems={0} />, {
      wrapper: BrowserRouter,
    });

    const numbnerIcon = queryByTestId("number-icon");
    expect(numbnerIcon).toBeNull();
  });

  it("5 is rendered when numberOfItems is 5", async () => {
    const { findByTestId } = render(<ShoppingCartIcon numberOfItems={5} />, {
      wrapper: BrowserRouter,
    });

    const numbnerIcon = await findByTestId("number-icon");
    expect(numbnerIcon).toHaveTextContent("5");
  });
});
