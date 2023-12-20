import React from "react";
import hero from "../assets/hero.jpg";
import { NavLink } from "react-router-dom";
const Herosection = ({ myData }) => {
  const { name } = myData;
  return (
    <section className="herosection">
      <aside className="heroData">
        <span>Welcome to</span>
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ullam
          omnis asperiores, eum enim suscipit officiis laborum optio dicta illum
          inventore Lorem ipsum dolor sit amet.
        </p>
        <NavLink to={"/signup"} className="btn">
          Get Started
        </NavLink>
      </aside>
      <aside className="heroImage">
        <img src={hero} alt="Hero" />
      </aside>
    </section>
  );
};

export default Herosection;
