import "./App.css";
import { CategoryProvider } from "./components/contextReducer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import PercategoryPage from "./screens/PercategoryPage";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <>
      <CategoryProvider>
        <Router>
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
          </Routes>
        </Router>
      </CategoryProvider>
    </>
  );
}

export default App;
