import { Product } from "types/product";
import { getProductPrice } from "utils/product";
import Breadcrumb from "components/Breadcrumb";

import classes from "./ProductDetail.module.scss";

interface ProductProps {
  product: Product;
  categories: string[];
}

const ProductDetail = ({ product, categories }: ProductProps) => {
  const breadcrumbItems = categories.map((category) => ({ item: category }));
  const price = getProductPrice(product);

  return (
    <div className={classes.root}>
      {breadcrumbItems.length > 0 && <Breadcrumb items={breadcrumbItems} />}
      <div className={classes.productContainer}>
        <div className={classes.productDetailContainer}>
          <img
            src={product.picture}
            alt="Product cover"
            className={classes.productImage}
          />
          <div className={classes.productInfo}>
            <div>
              <p className={classes.condition}>
                {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                {product.sold_quantity} vendidos
              </p>
              <h2 className={classes.title}>{product.title}</h2>
            </div>
            <p className={classes.price}>$ {price}</p>
            <button className={classes.buyButton}>Comprar</button>
          </div>
        </div>
        <div className={classes.descriptionContainer}>
          <p className={classes.descriptionTitle}>Descripción del producto</p>
          <p className={classes.description}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
