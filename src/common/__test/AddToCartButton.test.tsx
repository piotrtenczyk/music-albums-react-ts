import { render } from "@testing-library/react";
import AddToCartButton from "../AddToCartButton";

describe("AddToCartButton.tsx", () => {
  it("matches spanshot", () => {
    const { container } = render(<AddToCartButton onClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it("???????", () => {
    // w sumie to oczekujemy ze ta funkcja odpali sie po klikniecu na nasz button
    // czy mozemy to jakos sprawdzic?
    const { container } = render(<AddToCartButton onClick={() => {}} />);
    expect(true).toEqual(true);
  });
});
