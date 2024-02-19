import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.copmonent";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <div>
          {cartItem.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};
