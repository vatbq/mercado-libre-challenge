import { useNavigate } from "react-router-dom";

import { Product } from "types/product";
import shippingIcon from "assets/shippingIcon.png";
import { getProductPrice } from "utils/product";

import classes from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${product.id}`);
  };

  const price = getProductPrice(product);

  return (
    <div className={classes.root} onClick={handleClick}>
      <img
        src={product.picture}
        alt={product.title}
        className={classes.productImage}
      />
      <div className={classes.productInfoContainer}>
        <div className={classes.priceContainer}>
          <h2 className={classes.price}>$ {price}</h2>
          {product.free_shipping && (
            <img
              className={classes.freeShippingIcon}
              src={shippingIcon}
              alt="Free shipping"
            />
          )}
        </div>
        <p className={classes.description}>{product.title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
