import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ErrorMessage from "components/ErrorMessage";
import Header from "components/Header";
import Products from "components/Products";
import { getItems } from "services/products";
import { Product } from "types/product";

const Items = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getItems({ search: search || "" });
        setError(null);
        setProducts(response.items);
        setCategories(response.categories);
      } catch (e) {
        setError(e);
      }
    };

    fetchItems();
  }, [search]);

  return (
    <>
      <Header />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <Products products={products} categories={categories} />
    </>
  );
};

export default Items;
