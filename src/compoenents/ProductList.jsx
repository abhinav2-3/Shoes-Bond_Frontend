import React from "react";
import { useFilterContext } from "../context/FilterContext";
import Product from "./Product";

const ProductList = () => {
  const { filter_Products } = useFilterContext();
  return (
    <div className="productList">
      {filter_Products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </div>
  );
};

export default ProductList;
