import { createContext, useContext, useEffect, useState } from "react";

const addCartItem = (cartItem, productToAdd) => {
  // find if cart items contains product To Add
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id == productToAdd.id
  );
  // if found increment quantity
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / New cart item
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItem]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
