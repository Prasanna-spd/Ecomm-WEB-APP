import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ key, image, category, theme, price, size }) {
  return (
    <Link to={`/singleProduct/${key}`}>
      <p> {category} </p>
      <img src={image} alt="" width={300} />
      <h3>{theme} </h3>
      <p>{price}</p>
      <p>Size: {size}</p>
    </Link>
  );
}

export default ProductCard;
