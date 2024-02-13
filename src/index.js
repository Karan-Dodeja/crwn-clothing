import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { UserProvider } from "./context/user.context";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products.context";
import { CartProvider } from "./context/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
