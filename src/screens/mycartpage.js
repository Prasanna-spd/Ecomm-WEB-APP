import React from "react";
import Navbar from "../components/Navbar";
import MyCart from "../components/MyCart";
import Footer from "../components/footer";

function Mycartpage() {
  return (
    <div>
      <div className="navbaaar">
        <Navbar />
      </div>
      <MyCart />
      <Footer />
    </div>
  );
}

export default Mycartpage;
