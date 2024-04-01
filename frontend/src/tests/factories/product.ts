import { Product } from "types/product";

export const productMock: Product = {
  id: "1",
  title: "Wireless Bluetooth Headphones",
  price: {
    currency: "USD",
    amount: "89",
    decimals: "99",
  },
  picture: "https://example.com/product1.jpg",
  condition: "new",
  free_shipping: true,
  sold_quantity: 150,
  description:
    "High-quality wireless Bluetooth headphones with noise cancellation and up to 20 hours of battery life.",
  categories: ["Electronics", "Audio", "Headphones"],
};

export const productsMock: Product[] = [
  productMock,
  {
    id: "2",
    title: "Smartphone 128GB",
    price: {
      currency: "USD",
      amount: "599",
      decimals: "00",
    },
    picture: "https://example.com/product2.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 85,
    description:
      "Latest model smartphone with 128GB storage, 12MP camera, and water-resistant design.",
    categories: ["Electronics", "Mobile Phones"],
  },
];
