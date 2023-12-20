import React, { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  console.log(products);

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterProvider, FilterContext, useFilterContext };
