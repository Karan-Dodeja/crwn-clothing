import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

export const Checkout = () => {
  const { cartItems, addItemToCart, removeItemCart } = useContext(CartContext);
  return (
    <div>
      <h1>I am the checkout page.</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { name, quantity, id } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span onClick={() => removeItemCart(cartItem)}>Decrement</span>
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
