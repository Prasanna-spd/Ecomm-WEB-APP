import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/carousel";
import images from "../assets/images";
import categories from "../assets/category";
import Categorycard from "../components/categoryCard";
import BestsellingCards from "../components/bestSellingCards";
import bestsellers from "../assets/bestsellers";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <div className="navbaaar">
        <Navbar />
      </div>
      <Carousel images={images} />
      <hr />
      <div class="d-flex justify-content-center fs-1 fw-bold">Collections</div>
      <div class="container">
        <div class="row row-cols-auto">
          {categories.map((category) => {
            return (
              <div class="col mt-2">
                <Categorycard
                  id={category.id}
                  name={category.name}
                  image={category.image}
                />
              </div>
            );
          })}
        </div>
      </div>

      <hr />

      <div class="d-flex justify-content-center fs-1 fw-bold">
        Bestselling Products
      </div>
      <div class="container">
        <div class="row row-cols-auto">
          {bestsellers.map((best) => {
            return (
              <div class="col mt-2">
                <BestsellingCards
                  id={best.id}
                  category={best.category}
                  name={best.name}
                  image={best.image}
                  price={best.price}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
