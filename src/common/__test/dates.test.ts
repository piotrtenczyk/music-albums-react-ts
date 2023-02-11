import { daysAgo } from "../dates";

describe("dates.ts", () => {
  it("daysAgo() returns expected number of days", () => {
    const dateFromThePast = new Date("2023-02-02");
    const daysAgoResult = daysAgo(dateFromThePast);

    // TODO: Find a way to freeze time (ideally without designing a FakeDate class),
    // can we use a special library for this?

    expect(daysAgoResult).toEqual(9);
  });
});
