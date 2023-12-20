import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <nav>
      <h1>
        <NavLink to={"/"}>Swift Cart</NavLink>
      </h1>

      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
        <button className="btn">Log Out</button>

        <button className="btn">Log In</button>

        <NavLink to={"/cart"}>
          <FaShoppingCart />
          <span className="badge">1</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
