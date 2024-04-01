import { Product } from "types/product";
import ProductCard from "components/ProductCard";
import Breadcrumb from "components/Breadcrumb";

import classes from "./Products.module.scss";

interface ProductsProps {
  products: Product[];
  categories: string[];
}

const Products = ({ products, categories }: ProductsProps) => {
  const breadcrumbItems = categories.map((category) => ({ item: category }));

  return (
    <div className={classes.root}>
      {breadcrumbItems.length > 0 && <Breadcrumb items={breadcrumbItems} />}
      <div className={classes.productsContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
