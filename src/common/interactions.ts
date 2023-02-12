import { fireEvent } from "@testing-library/react";

export const click = (element: HTMLElement) => {
  fireEvent(
    element,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
};

export const clickNTimes = (element: HTMLElement, n: number) => {
  for (var i = 0; i < n; i++) {
    click(element);
  }
};
