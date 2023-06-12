import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryContext from "./contextReducer";

function Categorycard({ id, name, image }) {
  const { updateSelectedCategory } = useContext(CategoryContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    width: "400px",
    boxShadow: "lg",
    padding: "8px",
    borderRadius: "lg",
    transition: "all 0.3s",
    margin: "4px",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    zIndex: isHovered ? 1 : "auto",
  };

  return (
    <Link
      to="/percategoryPage"
      onClick={() => {
        updateSelectedCategory(name);
      }}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        class="card  category"
        style={cardStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img class="card-img-top" src={image} alt="Cardimage" />
        <div class="card-body">
          <h3>{name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Categorycard;
