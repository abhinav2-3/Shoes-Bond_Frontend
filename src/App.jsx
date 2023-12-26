import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Header from "./compoenents/Header";
import Footer from "./compoenents/Footer";
import About from "./screens/About";
import SingleProduct from "./compoenents/SingleProduct";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import ErrorPage from "./compoenents/ErrorPage";
import Contacts from "./screens/Contacts";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
