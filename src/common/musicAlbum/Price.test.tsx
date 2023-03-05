import { render, RenderResult } from "@testing-library/react";
import Price from "./Price";

describe("Price.tsx", () => {
  it("with discount", () => {
    const renderResult: RenderResult = render(
      <Price value={200} percentDiscount={20} />
    );
    expect(renderResult.container).toMatchSnapshot();
  });

  it("without discount", () => {
    const renderResult: RenderResult = render(<Price value={200} />);
    expect(renderResult.container).toMatchSnapshot();
  });

  it("displayed discount is mathematically correct", () => {
    const renderResult = render(<Price value={100} percentDiscount={19} />);
    const priceAfterDiscount = renderResult.getByTestId("discounted-price");
    expect(priceAfterDiscount).toHaveTextContent("81");
  });
});
