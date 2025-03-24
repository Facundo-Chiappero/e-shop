import { useContext } from "react";
import FiltersContext from "@context/FiltersContext";
import CartContext from "@context/CartContext";
import { Bag, Cart } from "@components/Icons";
import { HEADER_TXT } from "@consts/consts";
import CategoriesAndProductsContext from "@context/CategoriesAndProductsContext";
import ThemeChanger from "simple-theme-changer";

function Header() {
  const { minPrice, category, handleCategoryChange, handlePriceChange } = useContext(FiltersContext);
  const { showCart, handleShowCartChange } = useContext(CartContext);
  const { categories } = useContext(CategoriesAndProductsContext)


  return (
    <header>
      <div className="topHeader">
        <ThemeChanger defaultTheme="dark" />
        <h1>{HEADER_TXT.TITLE}</h1>
        <button onClick={handleShowCartChange}>
          {showCart ? <Bag /> : <Cart />}
        </button>
      </div>

      <div className="filtersSelector">
        <div>
          <label htmlFor="minPrice">{HEADER_TXT.MIN_PRICE}</label>
          <input
            type="range"
            name="minPrice"
            id="minPrice"
            value={minPrice}
            onChange={handlePriceChange}
            min={HEADER_TXT.PRICE_RANGE.MIN}
            max={HEADER_TXT.PRICE_RANGE.MAX}
          />
          <p>${minPrice}</p>
        </div>

        <select value={category} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}

export default Header;