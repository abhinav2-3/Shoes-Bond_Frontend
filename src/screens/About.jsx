import React from "react";
import Herosection from "../compoenents/Herosection";

const About = () => {
  const data = {
    name: "Shoes-Bond Ecommerce",
  };
  return (
    <div>
      <Herosection myData={data} />
    </div>
  );
};

export default About;
