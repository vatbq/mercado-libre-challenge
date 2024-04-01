import { Product } from "types/product";

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const getProductPrice = ({ price }: Product): string => {
  const decimals = price.decimals ? parseFloat(price.decimals) : 0;
  return numberFormatter.format(parseFloat(`${price.amount}.${decimals}`));
};
