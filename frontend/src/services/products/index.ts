import { GetItemsParams, ProductsAPIResponse } from "services/products/types";

export const getItems = async ({
  search,
}: GetItemsParams): Promise<ProductsAPIResponse> => {
  const encodedValue = encodeURIComponent(search);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/items?q=${encodedValue}`,
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return response.json();
};

export const getItem = async (id: string) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/items/${id}`);

  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  return response.json();
};
