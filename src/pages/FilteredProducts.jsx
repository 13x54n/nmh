import React, { useContext } from "react";
import Fuse from "fuse.js";

import Products from "../utils/Inventory.json";
import { FilterContext } from "../contexts/Filter";
import ProductCard from "../components/ProductCard";

export default function FilteredProducts() {
  const { filterInput } = useContext(FilterContext);
  const fuseOptions = {
    keys: ["name"], // Specify the properties to search by
  };
  const fuse = new Fuse(Products, fuseOptions);

  const result = fuse.search(filterInput);

  return (
    <div>
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8 mx-[5vw]">
        {result.map((product, index) => {
          return <ProductCard key={index} product={product.item} />;
        })}
      </div>
    </div>
  );
}
