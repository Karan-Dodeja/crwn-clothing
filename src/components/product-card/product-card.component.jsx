import "./product-card.style.scss";
import { Button } from "../button/button.component";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">ADD TO CART</Button>
    </div>
  );
};


