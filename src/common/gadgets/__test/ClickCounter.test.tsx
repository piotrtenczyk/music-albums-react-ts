import { fireEvent, render } from "@testing-library/react";
import exp from "constants";
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

    fireEvent(
      clickCounterElement,

      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(clickCounterElement).toHaveTextContent("1");
  });

  it("renders 5 after 5 clicks", () => {
    const { getByTestId } = render(<ClickCounter />);
    const clickCounterElement = getByTestId("clickCounter");

    expect(clickCounterElement).toHaveTextContent("0");

    for (var i = 0; i < 5; i++) {
      fireEvent(
        clickCounterElement,

        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    }
    expect(clickCounterElement).toHaveTextContent("5");
  });
});
