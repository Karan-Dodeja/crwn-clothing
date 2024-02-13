import { useContext } from "react";

import { ProductContext } from "../../context/products.context";

export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map((id, name) => {
        <div key={id}>
          <h1>{name}</h1>
        </div>;
      })}
    </div>
  );
};
