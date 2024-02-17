/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterInput, setFilterInput] = useState("");

  return (
    <FilterContext.Provider value={{ filterInput, setFilterInput }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;