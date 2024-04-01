import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ErrorMessage from "components/ErrorMessage";
import Header from "components/Header";
import ProductDetail from "components/ProductDetail";
import { getItem } from "services/products";
import { Product } from "types/product";

const Item = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getItem(id!);
        setError(null);
        setProduct(response.item);
      } catch (e) {
        setError(e);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Header />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {product && (
        <ProductDetail product={product} categories={product.categories} />
      )}
    </>
  );
};

export default Item;
