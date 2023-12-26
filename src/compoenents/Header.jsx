import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const Header = () => {
  const auth = localStorage.getItem("authToken");
  const location = useLocation();
  const logoutHandler = () => {
    localStorage.clear();
  };
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const { cart } = useCartContext();
  return (
    <nav>
      <h1>
        <NavLink to={"/"}>Shoes Bond.</NavLink>
      </h1>

      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        {auth ? (
          <>
            <NavLink to={"/contact"}>Contact</NavLink>
            <NavLink to={"/cart"}>
              <FaShoppingCart />
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </NavLink>
            <NavLink to={"/"} className="btn" onClick={logoutHandler}>
              Log Out
            </NavLink>
          </>
        ) : isLoginPage ? (
          <NavLink to={"/signup"} className="btn">
            Sign Up
          </NavLink>
        ) : isSignupPage ? (
          <NavLink to={"/login"} className="btn">
            Log In
          </NavLink>
        ) : (
          <>
            <NavLink to={"/login"} className="btn">
              Log In
            </NavLink>
            <NavLink to={"/signup"} className="btn">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
