import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, category, name, price, size }) {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: "100%",
    boxShadow: "lg",
    padding: "8px",
    borderRadius: "lg",
    transition: "all 0.3s",
    margin: "4px",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    zIndex: isHovered ? 1 : "auto",
  };

  return (
    <div>
      <div
        class="card"
        onClick={() => navigate(`/singleProduct/${id}`)}
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="" width={"100%"} />
        <div class="card-body">
          <p> {category} </p>
          <h4 class="card-title">{name}</h4>
          <p class="card-text">₹ {price}</p>
          <p>Size: {size}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
