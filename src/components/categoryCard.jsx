import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryContext from "./contextReducer";

function Categorycard({ key, name, image }) {
  const { updateSelectedCategory } = useContext(CategoryContext);

  return (
    <div>
      <div className="category">
        <img src={image} alt="category1" width={300} />
        <Link
          to="/percategoryPage"
          onClick={() => {
            updateSelectedCategory(name);
          }}
        >
          {name}
        </Link>
      </div>
    </div>
  );
}

export default Categorycard;
