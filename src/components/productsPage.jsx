import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../assets/products";
import CategoryContext from "./contextReducer";
import { useContext } from "react";
import PageNumbers from "./PageNumbers";

function ProductsPage() {
  const { selectedCategory } = useContext(CategoryContext);

  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  const endIndex = currentPage * productsPerPage;
  const startIndex = endIndex - productsPerPage;

  const handleThemeChange = (theme) => {
    if (selectedThemes.includes(theme)) {
      setSelectedThemes(selectedThemes.filter((t) => t !== theme));
    } else {
      setSelectedThemes([...selectedThemes, theme]);
    }
  };

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleSizeChange = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  let filteredProducts = products.filter((product) => {
    const isCategoryMatch = product.category === selectedCategory;
    const isThemeMatch =
      selectedThemes.length === 0 || selectedThemes.includes(product.theme);
    const isColorMatch =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    const isSizeMatch =
      selectedSizes.length === 0 || selectedSizes.includes(product.size);

    return isCategoryMatch && isThemeMatch && isColorMatch && isSizeMatch;
  });

  const displayData = filteredProducts.slice(startIndex, endIndex);

  return (
    <div>
      <hr />
      <div className="d-flex flex-row flex-sm-row">
        <div className="chooseFilter  d-flex flex-column">
          <h1>Fliters</h1>
          <hr />
          <div className="themes d-flex flex-column">
            <h3>Themes</h3>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleThemeChange("Anime")}
              />
              Anime
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleThemeChange("Coding")}
              />
              Coding
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleThemeChange("Cities")}
              />
              Cities
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleThemeChange("Hacking")}
              />
              Hacking
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleThemeChange("Bollywood")}
              />
              Bollywood
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleThemeChange("Hollywood")}
              />
              Hollywood
            </label>
          </div>
          <div className="colors d-flex flex-column">
            <h3>Colors</h3>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleColorChange("Black")}
              />
              Black
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleColorChange("Navy-Blue")}
              />
              Navy-Blue
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleColorChange("Red")}
              />
              Red
            </label>
            <label className="filter-label">
              <input
                type="checkbox"
                onChange={() => handleColorChange("White")}
              />
              White
            </label>
          </div>
          <div className="size d-flex flex-column">
            <h3>Size</h3>
            <label className="filter-label">
              <input type="checkbox" onChange={() => handleSizeChange("S")} />S
            </label>
            <label className="filter-label">
              <input type="checkbox" onChange={() => handleSizeChange("M")} />M
            </label>
            <label className="filter-label">
              <input type="checkbox" onChange={() => handleSizeChange("L")} />L
            </label>
            <label className="filter-label">
              <input type="checkbox" onChange={() => handleSizeChange("XL")} />
              XL
            </label>
          </div>
          {/* <button onClick={handleApplyFilters}>Apply filters</button> */}
        </div>
        <div className="displayProducts d-flex flex-column ps-4">
          <div className="container d-flex flex-column align-items-center justify-content-center">
            <div>
              <h1>Explore Our {selectedCategory} Collection</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi quisquam at itaque error nulla sunt accusantium possimus
                mollitia unde fugit dolor ipsum iste laudantium pariatur
                reprehenderit quod in, nemo rerum.
              </p>
            </div>
          </div>

          <div className="container">
            <div className="row row-cols-3">
              {displayData.map((item) => {
                return (
                  <div className="col mt-4">
                    <ProductCard
                      key={item.id}
                      id={item.id}
                      category={item.category}
                      theme={item.theme}
                      name={item.name}
                      color={item.color}
                      image={item.image}
                      price={item.price}
                      size={item.size}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <PageNumbers
        filteredProducts={filteredProducts}
        productsPerPage={productsPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default ProductsPage;
