export function formatCurrency(text: string, conversionRate = 1) {
  const filteredText = text.replace(/[^0-9]/g, "").slice(0, 10);
  const significantDigits = filteredText.slice(0, -2);
  const fractionDigits = filteredText.slice(-2);

  return (
    Number(significantDigits + "." + fractionDigits) * conversionRate
  ).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
