import "./App.css";
import { CategoryProvider } from "./components/contextReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import PercategoryPage from "./screens/PercategoryPage";
import SingleProduct from "./components/SingleProduct";
import ScrollToTop from "./scrollToTop";
import Pagination from "./components/pagination";
import MyCart from "./components/MyCart";

function App() {
  return (
    <>
      <CategoryProvider>
        <Router>
          <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/percategoryPage"
                element={<PercategoryPage />}
              />
              <Route
                exact
                path="/singleProduct/:id"
                element={<SingleProduct />}
              />
              <Route exact path="/pagination" element={<Pagination />} />
              <Route exact path="/myCart" element={<MyCart />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </CategoryProvider>
    </>
  );
}

export default App;
