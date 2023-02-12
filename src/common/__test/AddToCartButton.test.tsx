import { render } from "@testing-library/react";
import AddToCartButton from "../AddToCartButton";
import { click } from "../interactions";

describe("AddToCartButton.tsx", () => {
  it("matches spanshot", () => {
    const { container } = render(<AddToCartButton onClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it("expects onClick function to be called (sposob pierwszy)", () => {
    let isExecuted = false;
    const zmienZmienna = () => {
      isExecuted = true;
    };
    const { getByTestId } = render(<AddToCartButton onClick={zmienZmienna} />);

    const addButtonElement = getByTestId("addToCartButton");
    click(addButtonElement);
    expect(isExecuted).toEqual(true);
  });

  it("expects onClick function to be called (sposob 2)", () => {
    const executeOnclick = jest.fn();

    const { getByTestId } = render(
      <AddToCartButton onClick={executeOnclick} />
    );

    const addButtonElement = getByTestId("addToCartButton");
    click(addButtonElement);
    click(addButtonElement);
    expect(executeOnclick).toHaveBeenCalledTimes(2);
  });
});
