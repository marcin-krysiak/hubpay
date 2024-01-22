const flagUri = "https://wise.com/public-resources/assets/flags/rectangle";

export function getCurrencyFlag(currency: string) {
  return `${flagUri}/${currency.toLowerCase()}.png`;
}
