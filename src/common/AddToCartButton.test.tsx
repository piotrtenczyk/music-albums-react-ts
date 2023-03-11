import { fireEvent, getByText, render } from "@testing-library/react";
import AddToCartButton from "./AddToCartButton";

describe("AddToCartButton.tsx", () => {
  it("matches snapshot", () => {
    const { container } = render(<AddToCartButton onClick={jest.fn} />);

    expect(container).toMatchSnapshot();
  });

  it("can be clicked", () => {
    const clickHandler = jest.fn();
    const { container } = render(<AddToCartButton onClick={clickHandler} />);
    fireEvent.click(getByText(container, "Add"));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
