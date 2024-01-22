import "@testing-library/react-native/extend-expect";

import { render } from "@testing-library/react-native";

import { FeesAccordion } from "./index";

describe("Home screen", () => {
  it("should display conversion details", async () => {
    const { getByText } = render(
      <FeesAccordion
        {...{
          baseCurrency: "eur",
          selectedCurrency: "gbp",
          conversionRate: 0.8,
        }}
      />
    );

    expect(getByText("1")).toBeVisible();
    expect(getByText("EUR")).toBeVisible();
    expect(getByText("0.80")).toBeVisible();
    expect(getByText("GBP")).toBeVisible();
  });
});
