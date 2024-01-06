import React from "react";
import { useFilterContext } from "../context/FilterContext";
import Product from "./Product";
import Loader from "./Loader";

const ProductList = () => {
  const { filter_Products } = useFilterContext();
  if (filter_Products.length === 0 || filter_Products.length === "[]") {
    return <Loader />;
  } else {
    return (
      <div className="productList">
        {filter_Products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    );
  }
};

export default ProductList;
