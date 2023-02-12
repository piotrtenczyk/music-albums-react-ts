import { fireEvent, render } from "@testing-library/react";
import exp from "constants";
import ClickCounter from "../ClickCounter";

const click = (element: HTMLElement) => {
  fireEvent(
    element,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
};

const clickNTimes = (element: HTMLElement, n: number) => {
  for (var i = 0; i < n; i++) {
    click(element);
  }
};

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
