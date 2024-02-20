import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.copmonent";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        <div>
          {cartItem.length ? (
            cartItem.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          )}
        </div>
        <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};
