export function getCurrencies(baseCurrency: string) {
  return fetch(
    `https://api.frankfurter.app/latest?from=${baseCurrency.toUpperCase()}`
  )
    .then((response) => response.json())
    .then((response) => response.rates)
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
}
