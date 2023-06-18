import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import Theme from "./theme";
import { useCart } from "./contextReducer";
import CategoryContext from "./contextReducer";
import { useContext } from "react";

function Navbar() {
  let navigate = useNavigate();

  let data = useCart();

  const handleClick = () => {
    navigate("/myCart");
  };
  const { updateSelectedCategory } = useContext(CategoryContext);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid ">
          <div className="navbar-heading-name">
            <Link class="navbar-brand fs-1" to="/">
              Fusion-Closet
            </Link>
          </div>
          <div>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success"
                type="submit"
                onClick={(e) => {
                  navigate("/statusPage");
                  e.preventDefault();
                }}
              >
                Search
              </button>
            </form>
          </div>
          <div>
            <button
              class="navbar-toggler mt-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ backgroundColor: "white" }}
            >
              <span class="navbar-toggler-icon"></span>
              {data.length > 0 ? (
                <span
                  style={{
                    verticalAlign: "super",
                    margin: "5px",
                    padding: "4px",
                    backgroundColor: " RGB(25, 135, 84)",
                    borderRadius: "20px",
                    color: "black",
                  }}
                >
                  {data.length}
                </span>
              ) : (
                ""
              )}
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item me-3">
                <Link
                  class="nav-link"
                  aria-current="page"
                  to="/percategoryPage"
                  onClick={() => {
                    updateSelectedCategory("T-Shirts");
                  }}
                >
                  T-Shirts
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link
                  class="nav-link"
                  to="/percategoryPage"
                  onClick={() => {
                    updateSelectedCategory("Hoodies");
                  }}
                >
                  Hoodies
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link
                  class="nav-link"
                  to="/percategoryPage"
                  onClick={() => {
                    updateSelectedCategory("Jeans");
                  }}
                >
                  Jeans
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link
                  class="nav-link"
                  to="/percategoryPage"
                  onClick={() => {
                    updateSelectedCategory("Caps");
                  }}
                >
                  Caps
                </Link>
              </li>
              <li class="nav-item me-3">
                <Link
                  class="nav-link"
                  to="/percategoryPage"
                  onClick={() => {
                    updateSelectedCategory("Jackets");
                  }}
                >
                  Jackets
                </Link>
              </li>
            </ul>

            <button
              class="mycart-btn btn btn-outline-success me-2"
              onClick={handleClick}
            >
              My Cart
              <span
                style={{
                  verticalAlign: "super",
                  margin: "5px",
                  padding: "2px",
                  backgroundColor: "white",
                  borderRadius: "9px",
                  color: "black",
                }}
              >
                {data.length}
              </span>
            </button>
            <button
              class="btn btn-outline-success "
              onClick={() => {
                navigate("/statusPage");
              }}
            >
              Login
            </button>
            <Theme />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
