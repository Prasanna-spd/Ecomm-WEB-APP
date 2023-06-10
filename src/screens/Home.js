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
      <Navbar />
      <Carousel images={images} />
      <hr />
      <h1>Collections</h1>
      {categories.map((category) => {
        return (
          <Categorycard
            id={category.id}
            name={category.name}
            image={category.image}
          />
        );
      })}
      <hr />
      <h1>Bestselling Products</h1>
      {bestsellers.map((best) => {
        return (
          <BestsellingCards
            id={best.id}
            category={best.category}
            name={best.name}
            image={best.image}
            price={best.price}
          />
        );
      })}
      <BestsellingCards />
      <Footer />
    </div>
  );
}

export default Home;
