import React, { useEffect, useState } from "react";
import items from "../assets/products";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const data = items.find((element) => element.id === productId);

    setProduct(data);
  }, [productId]);
  return (
    <div>
      <Navbar />
      <div className="productImage"></div>
      <div className="productDetails">
        <h1>{product.theme} </h1>
        <h5>Product Description</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos
          commodi maiores nesciunt sapiente quasi voluptates a iste, vero rem
          esse officiis eveniet quae earum aut rerum labore, laudantium modi
          nemo, iusto reiciendis distinctio quidem culpa qui! Explicabo quidem
          in deserunt repellat aliquam veritatis? Voluptatem laborum tenetur
          facere sequi nulla.
        </p>
        <h5>Product Highlights</h5>
        <ul>
          <li>abc</li>
          <li>xyz</li>
          <li>pqr</li>
          <li>ert</li>
          <li>iuy</li>
        </ul>
        <h6>Color : Black</h6>
        <div className="buyMehod">
          <h5>{product.size}</h5>
          <div>{product.price}</div>
          <div> Enter Location </div>
          <div>
            {" "}
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="offers">
          <ul>
            <li>abc</li>
            <li>xyz</li>
            <li>pqr</li>
            <li>ert</li>
            <li>iuy</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
