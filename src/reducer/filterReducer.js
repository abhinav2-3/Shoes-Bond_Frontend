const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_Products: [...action.payload],
        all_Products: [...action.payload],
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORT_PRODUCTS":
      let newSortedData;

      const { filter_Products, sorting_value } = state;

      const sortProducts = (a, b) => {
        if (sorting_value === "a-z") return a.name.localeCompare(b.name);
        if (sorting_value === "z-a") return b.name.localeCompare(a.name);
        if (sorting_value === "lowToHigh") return a.price - b.price;
        if (sorting_value === "highToLow") return b.price - a.price;
      };

      newSortedData = [...filter_Products].sort(sortProducts);
      return {
        ...state,
        filter_Products: newSortedData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    default:
      return state;
  }
};
export default filterReducer;
