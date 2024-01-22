import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("should format number to locale", () => {
    expect(formatCurrency("1234567890")).toBe("12,345,678.90");
  });
  it("should remove disallowed characters", () => {
    expect(formatCurrency("-!asd1 234 5678,,90@#$^&*(")).toBe("12,345,678.90");
  });
  it("should apply conversion rate", () => {
    expect(formatCurrency("10.00", 2.22)).toBe("22.20");
  });
});
