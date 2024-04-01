import { Product } from "types/product";

export interface ProductsAPIResponse {
  author: {
    name: string;
    lastName: string;
  };
  categories: string[];
  items: Product[];
}

export interface GetItemsParams {
  search: string;
}
