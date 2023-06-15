import React from "react";
import ProductsPage from "../components/productsPage";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function PercategoryPage() {
  return (
    <div>
      <div className="navbaaar">
        <Navbar />
      </div>
      <ProductsPage />
      <Footer />
    </div>
  );
}

export default PercategoryPage;
