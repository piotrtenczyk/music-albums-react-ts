import { daysAgo } from "./dates";

describe("dates.ts", () => {
  it("daysAgo()", () => {
    const date = new Date("2018-04-27T00:00:00-07:00");
    const daysAgoValue = daysAgo(date);
    expect(daysAgoValue).toEqual(1773);
  });
});
