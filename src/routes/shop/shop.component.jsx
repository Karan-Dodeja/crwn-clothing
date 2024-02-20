import { Routes, Route } from "react-router-dom"; 
import "./shop.styles.scss";
import { CategoriesPreview } from "../categories-preview/categories-preview.routes";

export const Shop = () => {
  
  return (
    <Routes>
      <Route  index element={<CategoriesPreview />} />
    </Routes>
  );
};
