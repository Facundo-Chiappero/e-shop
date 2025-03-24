import { useEffect, useState } from "react";

function useHandleCart({ productsToUse }) {
  const [inCart, setInCart] = useState(() => {
    const savedCart = localStorage.getItem("inCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [amounts, setAmounts] = useState(() => {
    const savedAmounts = localStorage.getItem("cartAmounts");
    return savedAmounts ? JSON.parse(savedAmounts) : {};
  });

  useEffect(() => {
    localStorage.setItem("inCart", JSON.stringify(inCart));
  }, [inCart]);

  useEffect(() => {
    localStorage.setItem("cartAmounts", JSON.stringify(amounts));
  }, [amounts]);

  const handleUpdateCart = (id) => {
    const productInCart = inCart.find((product) => product.id === id);

    if (productInCart) {
      setInCart((prev) => prev.filter((product) => product.id !== id));
      setAmounts((prev) => {
        const newAmounts = { ...prev };
        delete newAmounts[id];
        return newAmounts;
      });
    } else {
      const productToAdd = productsToUse.find((product) => product.id === id);
      if (productToAdd) {
        setInCart((prev) => [...prev, productToAdd]);
        setAmounts((prev) => ({
          ...prev,
          [id]: 1,
        }));
      }
    }
  };

  return { inCart, setInCart, handleUpdateCart, amounts, setAmounts };
}

export default useHandleCart;