import React from "react";

function PageNumbers({ filteredProducts, productsPerPage, paginate }) {
  const pageNumbers = [];

  for (
    let index = 1;
    index <= Math.ceil(filteredProducts.length / productsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <div>
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
    </div>
  );
}

export default PageNumbers;
