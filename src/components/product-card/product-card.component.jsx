import "./product-card.style.scss";
import { useCallback, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Button, BUTTON_TYPE_CLASSES } from "../button/button.component";

export const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={() => addItemToCart(product)}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        ADD TO CART
      </Button>
    </div>
  );
};
