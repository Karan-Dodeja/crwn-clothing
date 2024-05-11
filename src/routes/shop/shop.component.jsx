import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./shop.styles.scss";
import { CategoriesPreview } from "../categories-preview/categories-preview.routes";
import { Category } from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";

export const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMaps = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };

    getCategoriesMaps();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
};
