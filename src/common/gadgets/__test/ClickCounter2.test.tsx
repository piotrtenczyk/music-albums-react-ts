import { render } from "@testing-library/react";
import { click, clickNTimes } from "../../interactions";
import ClickCounter from "../ClickCounter";

describe("ClickCounter.tsx", () => {
  it("matches snapshot when there were no clicks", () => {
    const { container } = render(<ClickCounter />);
    expect(container).toMatchSnapshot();
  });

  it("increases from 0 to 1, after 1 click", () => {
    const { getByTestId } = render(<ClickCounter />);
    const clickCounterElement = getByTestId("clickCounter");
    expect(clickCounterElement).toHaveTextContent("0");
    click(clickCounterElement);
    expect(clickCounterElement).toHaveTextContent("1");
  });

  it("renders 5 after 5 clicks", () => {
    const { getByTestId } = render(<ClickCounter />);
    const clickCounterElement = getByTestId("clickCounter");
    expect(clickCounterElement).toHaveTextContent("0");
    clickNTimes(clickCounterElement, 5);
    expect(clickCounterElement).toHaveTextContent("5");
  });
});
