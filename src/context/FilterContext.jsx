import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer";
import { useProductContext } from "./ProductContext";

const FilterContext = createContext();

const initialState = {
  filter_Products: [],
  all_Products: [],
  gridview: true,
  sorting_value: "lowToHigh",
  filters: {
    text: "",
    category: "All",
    company: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

const FilterProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  const sorting = (e) => {
    return dispatch({ type: "GET_SORT_VALUE", payload: e.target.value });
  };

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  return (
    <FilterContext.Provider value={{ ...state, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilterContext = () => {
  return useContext(FilterContext);
};
export { FilterProvider, FilterContext, useFilterContext };
