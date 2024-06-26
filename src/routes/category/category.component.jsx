import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { CategoriesContext } from "../../context/categories.context";
import { Fragment, useSelector, useEffect, useState } from "react";
import { ProductCard } from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";

export const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => {
            <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};
