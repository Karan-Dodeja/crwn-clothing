import "./product-card.style.scss";
import { Button } from "../button/button.component";
import { useCallback, useContext } from "react";
import { CartContext } from "../../context/cart.context";

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
      <Button onClick={() => addItemToCart(product)} buttonType="inverted">
        ADD TO CART
      </Button>
    </div>
  );
};
