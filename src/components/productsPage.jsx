import React from "react";
import ProductCard from "./ProductCard";
import products from "../assets/products";
import CategoryContext from "./contextReducer";
import { useContext } from "react";

function ProductsPage() {
  const { selectedCategory } = useContext(CategoryContext);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div>
      <hr />
      <div className="chooseFilter">
        <div>
          <h1>Fliters</h1>
          <hr />
          <div>
            <h3>Themes</h3>
            <label>
              <input type="checkbox" />
              Anime
            </label>
            <label>
              <input type="checkbox" />
              Coding
            </label>
            <label>
              <input type="checkbox" />
              Gym
            </label>
            <label>
              <input type="checkbox" />
              Hacking
            </label>
            <label>
              <input type="checkbox" />
              Lifestyle
            </label>
            <label>
              <input type="checkbox" />
              Music
            </label>
          </div>
          <div>
            <h3>Colors</h3>
            <label>
              <input type="checkbox" />
              Black
            </label>
            <label>
              <input type="checkbox" />
              Navy-Blue
            </label>
            <label>
              <input type="checkbox" />
              Red
            </label>
            <label>
              <input type="checkbox" />
              White
            </label>
          </div>
          <div>
            <h3>Size</h3>
            <label>
              <input type="checkbox" />L
            </label>
          </div>
          <button>Apply filters</button>
        </div>
        <div className="displayProducts">
          <h1>Explore Our {selectedCategory} Collection</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            quisquam at itaque error nulla sunt accusantium possimus mollitia
            unde fugit dolor ipsum iste laudantium pariatur reprehenderit quod
            in, nemo rerum.
          </p>
          {filteredProducts.map((item) => {
            return (
              <ProductCard
                id={item.id}
                category={item.category}
                theme={item.theme}
                image={item.image}
                price={item.price}
                size={item.size}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
