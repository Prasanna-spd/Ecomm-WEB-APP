import { React } from "react";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/myCart");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand fs-1" to="/">
            Modify
          </Link>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item me-3">
                <Link class="nav-link" aria-current="page" to="#">
                  T-Shirts
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link" to="#">
                  Hoodies
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link" to="#">
                  Jeans
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link" to="#">
                  Caps
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link class="nav-link" to="#">
                  Jackets
                </Link>
              </li>
            </ul>

            <button class="btn btn-outline-success me-2" onClick={handleClick}>
              My Cart
            </button>
            <button class="btn btn-outline-success ">Login</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
