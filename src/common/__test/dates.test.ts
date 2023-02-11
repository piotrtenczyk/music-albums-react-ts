import { daysAgo } from "../dates";

jest.useFakeTimers().setSystemTime(new Date("2023/02/01"));

describe("dates.ts", () => {
  it("daysAgo() returns expected number of days", () => {
    const dateFromThePast = new Date("2023-01-01");
    const daysAgoResult = daysAgo(dateFromThePast);

    expect(daysAgoResult).toEqual(30);
  });
});
