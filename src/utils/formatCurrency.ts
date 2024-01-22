export function formatCurrency(text: string, conversionRate = 1) {
  const filteredText = text.replace(/\D/g, "").slice(0, 10);
  const significantDigits = filteredText.slice(0, -2);
  const fractionDigits = filteredText.slice(-2);

  return (
    Number(significantDigits + "." + fractionDigits) * conversionRate
  ).toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
