import "./styles/App.scss";
import { useProductContext } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./compoenents/Header";
import Footer from "./compoenents/Footer";
import About from "./screens/About";
import SingleProduct from "./compoenents/SingleProduct";

function App() {
  const { featureProducts } = useProductContext();
  console.log(featureProducts);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/singleProduct" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
