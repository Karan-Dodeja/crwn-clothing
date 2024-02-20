import { createContext, useContext, useEffect, useState } from "react";

const addCartItem = (cartItem, productToAdd) => {
  // find if cart items contains product To Add
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found increment quantity
  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // return new array with modified cartItems / New cart item
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItem, productToRemove) => {
  // find if cart items contains product To Add
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  // if found dec quantity
  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // return new array with modified cartItems / New cart item
  return cartItem.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (clearItems, cartItemToClear) => {
  return clearItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  clearItemFromCart: () => {},
  addItemToCart: () => {},
  removeItemCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItem]);

  useEffect(() => {
    const totalCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(totalCartCount);
  }, [cartItem]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItem(removeCartItem(cartItem, productToRemove));
  };

  const clearItemToCart = (cartItemRemove) => {
    setCartItem(clearCartItem(cartItem, cartItemRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    clearItemToCart,
    removeItemToCart,
    cartItem,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
