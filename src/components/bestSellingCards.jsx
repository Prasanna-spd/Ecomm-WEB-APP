import React from "react";

function BestsellingCards({ category, name, image, price }) {
  return (
    <div>
      <div className="bestsellers">
        <img src={image} alt="" width={300} />
        <p>category</p>
        <title>name</title>
        <p>₹ price</p>
      </div>
    </div>
  );
}

export default BestsellingCards;
