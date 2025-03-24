import { useContext, useEffect, useState } from "react";
import FiltersContext from "@context/FiltersContext";

function useGetCartToUse({ inCart }) {
    const { minPrice, category } = useContext(FiltersContext);
    const [cartToUse, setCartToUse] = useState([]);

    useEffect(() => {
        const filteredCart = inCart.filter((product) => {
            return (
                product.precio >= minPrice &&
                (category === "Todas" || category === product.categoria)
            );
        });
        setCartToUse(filteredCart);
    }, [category, minPrice, inCart]);

    return { cartToUse };
}

export default useGetCartToUse;