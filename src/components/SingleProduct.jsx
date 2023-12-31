import React, { useEffect, useState } from "react";
import items from "../assets/products";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useDispatchCart, useCart } from "./contextReducer";

function SingleProduct() {
  let dispatch = useDispatchCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  let cartData = useCart();

  useEffect(() => {
    const data = items.find((element) => element.id.toString() === id);
    setProduct(data);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleAddtoCart = () => {
    dispatch({
      type: "ADD",
      id: product.id,
      name: product.name,
      size: product.size,
      price: product.price,
    });
  };

  return (
    <div>
      <div className="navbaaar">
        <Navbar />
      </div>
      <div className="d-flex flex-row single-product">
        <div className="imageAngles" style={{ width: "10%" }}>
          <h1>Hello</h1>
        </div>
        <div
          className="productImage"
          // style={{ width: "500px", backgroundColor: "red" }}
        >
          <img
            src={product.image}
            alt="This a pictu"
            // height={"500px"}
            // width={"70%"}
          />
        </div>
        <div className="productDetails d-flex flex-column ">
          <div>
            <h1>{product.name}</h1>
          </div>
          <div className="text-secondary">
            <h5>Product Description</h5>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              eos commodi maiores nesciunt sapiente quasi voluptates a iste,
              vero rem esse officiis eveniet quae earum aut rerum labore,
              laudantium modi nemo, iusto reiciendis distinctio quidem culpa
              qui! Explicabo quidem in deserunt repellat aliquam veritatis?
              Voluptatem laborum tenetur facere sequi nulla.
            </p>
          </div>
          <div>
            <h5 className="text-secondary">Product Highlights</h5>
            <ul>
              <li>abc</li>
              <li>xyz</li>
              <li>pqr</li>
              <li>ert</li>
              <li>iuy</li>
            </ul>
          </div>
          <div>
            <h6 className="text-secondary">Color: Black</h6>
            <button type="button" class="btn btn-dark  m-2">
              Black
            </button>
            <button type="button" class="btn btn-danger m-2">
              Red
            </button>
            <button type="button" class="btn btn-light m-2">
              White
            </button>
          </div>

          <div className="buyMehod">
            <div>
              <h5> SIZE : {product.size}</h5>
              <button type="button" class="btn btn-outline-success me-2">
                S
              </button>
              <button type="button" class="btn btn-outline-success me-2">
                M
              </button>
              <button type="button" class="btn btn-outline-success me-2">
                L
              </button>
              <button type="button" class="btn btn-outline-success me-2">
                XL
              </button>
            </div>

            <hr />
            <div className="mt-4 mb-4">{product.price}</div>

            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control border border-success"
                placeholder="PINCODE"
                aria-label="Contumer's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-success"
                type="button"
                id="button-addon2"
              >
                Check
              </button>
            </div>
            <div>
              <button type="button" class="btn btn-outline-success me-2">
                BUY NOW
              </button>
              <button
                type="button"
                class="btn btn-outline-success me-2"
                onClick={handleAddtoCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="offers">
            <h5 className="text-secondary">Exciting Offers</h5>
            <ul>
              <li>abc</li>
              <li>xyz</li>
              <li>pqr</li>
              <li>ert</li>
              <li>iuy</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
