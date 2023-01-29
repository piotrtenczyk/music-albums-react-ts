import { render, RenderResult } from "@testing-library/react";
import exp from "constants";
import AlbumTitle from "../AlbumTitle";

describe("AlbumTitle.tsx", () => {
  it("matches snapshot for string children", () => {
    const renderResult: RenderResult = render(
      <AlbumTitle>My Greatest Hits</AlbumTitle>
    );

    const container = renderResult.container;

    expect(container).toMatchSnapshot();
  });

  it("matches snapshot for a complex children elements", () => {
    const { container } = render(
      <AlbumTitle>
        <div id="additional_div">text inside another div</div>
      </AlbumTitle>
    );
    expect(container).toMatchSnapshot();
  });
});
