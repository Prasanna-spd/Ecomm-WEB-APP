import React, { useState } from "react";
import items from "../assets/products";

function Pagination() {
  //   const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };
  const endIndex = currentPage * productsPerPage;
  const startIndex = endIndex - productsPerPage;

  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(items.length / productsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }

  const displayData = items.slice(startIndex, endIndex);

  return (
    <div>
      hello world
      {displayData.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <h2>{item.name}</h2>
          <p>{item.category}</p>
          <p>{item.theme}</p>
          <p>{item.price}</p>
          <p>{item.size}</p>
          <p>{item.color}</p>
        </div>
      ))}
      <div>
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a
                  onClick={(e) => paginate(number, e)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
