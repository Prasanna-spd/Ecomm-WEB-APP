import React, { useState } from "react";

function BestsellingCards({ category, name, image, price }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    boxShadow: "lg",
    padding: "8px",
    borderRadius: "lg",
    transition: "all 0.3s",
    margin: "4px",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    zIndex: isHovered ? 1 : "auto",
  };
  return (
    <div
      class="card best-sellers "
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        class="card-img-top"
        src={image}
        alt="Cardimage"
        style={{ height: "90%" }}
      />
      <div class="card-body">
        <h4 class="card-title">{name}</h4>
        <p class="card-text">{category}</p>
        <p class="card-text">₹{price}</p>
      </div>
    </div>
  );
}

export default BestsellingCards;
