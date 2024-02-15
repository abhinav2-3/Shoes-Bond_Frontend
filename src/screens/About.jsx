import React from "react";
import Herosection from "../components/Herosection";

const About = () => {
  const data = {
    name: "Shoes-Bond Ecommerce",
  };
  return (
    <div className="home">
      <Herosection myData={data} />
    </div>
  );
};

export default About;
