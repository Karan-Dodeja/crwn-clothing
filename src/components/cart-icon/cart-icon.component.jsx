import "./cart-icon.styles.scss";
import { ReactCOmponent as ShoppingCart } from "../../assets/shopping-bag.svg";

export const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
