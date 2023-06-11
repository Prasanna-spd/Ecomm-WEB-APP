import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, category, name, price, size }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/singleProduct/${id}`)}
      style={{ cursor: "pointer" }}
    >
      <p>{id}</p>
      <p> {category} </p>
      <img src={image} alt="" width={300} />
      <h3>{name} </h3>
      <p>{price}</p>
      <p>Size: {size}</p>
    </div>
  );
}

export default ProductCard;
