import "./categories-preview.styles.scss";

import { selectCategoriesMap } from "../../store/categories/category.selector";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { CategoryPreview } from "../../components/category-preview/category-preview.component";

export const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};
