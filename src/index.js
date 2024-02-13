import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { UserProvider } from "./context/user.context";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
