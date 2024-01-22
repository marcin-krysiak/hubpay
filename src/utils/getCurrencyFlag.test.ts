import { getCurrencyFlag } from "./getCurrencyFlag";

describe("getCurrencyFlag", () => {
  it("should construct flag url from currency symbol", () => {
    expect(getCurrencyFlag("GBP")).toBe(
      "https://wise.com/public-resources/assets/flags/rectangle/gbp.png"
    );
  });
});
