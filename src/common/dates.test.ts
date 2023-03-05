import { daysAgo } from "./dates";

describe("dates.ts", () => {
  it("daysAgo()", () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2023-03-05"));

    const date = new Date("2018-04-27");
    const daysAgoValue = daysAgo(date);
    expect(daysAgoValue).toEqual(1773);
  });
});
