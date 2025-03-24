import { useContext, useEffect, useState } from "react";
import FiltersContext from "@context/FiltersContext";
import { getProducts } from "@services/getProducts";
import { API_URL } from "@consts/consts";

function useGetProductsToAndCategoriesUse() {
  const { minPrice, category } = useContext(FiltersContext);
  const [productsToUse, setProductsToUse] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await getProducts(API_URL);
      setProducts(result);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const uniqueCategories = ["Todas"];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.categoria)) {
        uniqueCategories.push(product.categoria);
      }
    });
    setCategories(uniqueCategories);
  }, [products]);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return (
        product.precio >= minPrice &&
        (category === "Todas" || category === product.categoria)
      );
    });
    setProductsToUse(filteredProducts);
  }, [category, minPrice, products]);

  return { productsToUse, categories };
}

export default useGetProductsToAndCategoriesUse;