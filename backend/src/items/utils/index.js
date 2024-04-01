const parseItem = (item) => {
  const [priceAmount, priceDecimal] = item.price.toString().split('.');

  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: priceAmount,
      decimals: priceDecimal,
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping,
  };
};

const parseDetailItem = (item) => ({
  ...parseItem(item),
  sold_quantity: item.initial_quantity,
  description: item.plain_text,
  categories: item.categories.path_from_root.map((category) => category.name),
});

module.exports = {
  parseDetailItem,
  parseItem,
};
