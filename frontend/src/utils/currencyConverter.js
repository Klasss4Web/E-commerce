export const currencyCoverter = (currencyType, amount) => {
  const result = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: currencyType,
  }).format(amount);
  return result;
};