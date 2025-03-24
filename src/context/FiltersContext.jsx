import { createContext, useState } from "react";

const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState("Todas");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  return (
    <FiltersContext.Provider value={{ minPrice, category, handleCategoryChange, handlePriceChange }}>
      {children}
    </FiltersContext.Provider>
  );
}

export default FiltersContext;