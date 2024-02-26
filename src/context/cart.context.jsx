import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

// Using Reducer
const CART_ACTION_TYPE = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};

const INITIAL_STATE = {
  cartCount: 0,
  cartTotal: 0,
  cartItem: [],
  isCartOpen: false,
};

// reducer
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPE.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type of ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItem, isCartOpen, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartReducer = (newCartItems) => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const totalCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPE.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: totalCartCount,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItem, productToAdd);
    updateCartReducer(newCartItems);
  };

  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItem, productToRemove);
    updateCartReducer(newCartItems);
  };

  const clearItemToCart = (cartItemRemove) => {
    const newCartItems = clearCartItem(cartItem, cartItemRemove);
    updateCartReducer(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPE.SET_CART_OPEN, bool));
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
