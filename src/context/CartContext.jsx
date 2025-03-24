import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(() => {
    const prevShowCart = localStorage.getItem("showCart");
    return prevShowCart === "true";
  });

  useEffect(() => {
    localStorage.setItem("showCart", showCart);
  }, [showCart]);

  const handleShowCartChange = () => {
    setShowCart(!showCart);
  };

  return (
    <CartContext.Provider value={{ showCart, handleShowCartChange }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;