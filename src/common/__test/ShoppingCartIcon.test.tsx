import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartIcon from "../ShoppingCartIcon";

/**
 * render(<ShoppingCartIcon numberOfItems={0} />, {
      wrapper: BrowserRouter,
    });

    Powysze powtarza się w naszym tescie ... czy mozemy to jakoś usprawnić.

    Versja na 5: zapewnimy jakąkolwiek formę anstrakcji, tak zebyśmy mogli ten kod re-uzyc
    Versja na 6: napiszemy naszego własnego renderera, który jest oparty na 
    (i 100% kompatybliny z ) render z bilbioteki react-router-dom. 
    Podpowiedźio pytanie: Czym jest renderer? Odp: Funkcją ;-) 
 */

const renderShoppingCartIcon = (
  numberOfItems: number,
  options?: RenderOptions
) => {
  return render(<ShoppingCartIcon numberOfItems={numberOfItems} />, {
    wrapper: BrowserRouter,
    ...options,
  });
};

describe("ShoppingCartIcon.tsx", () => {
  it("matchesSnapshot", () => {
    const { container } = renderShoppingCartIcon(99);
    expect(container).toMatchSnapshot();
  });

  it("zero is not rendered numberOfItems is 0", () => {
    const { queryByTestId } = renderShoppingCartIcon(0);

    const numbnerIcon = queryByTestId("number-icon");
    expect(numbnerIcon).toBeNull();
  });

  it("5 is rendered when numberOfItems is 5", async () => {
    const { findByTestId } = renderShoppingCartIcon(5);

    const numbnerIcon = await findByTestId("number-icon");
    expect(numbnerIcon).toHaveTextContent("5");
  });
});
