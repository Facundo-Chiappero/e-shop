import { useContext } from "react";
import CartContext from "@context/CartContext";
import Cart from '@components/Cart'
import Shop from "@components/Shop";

function Main() {
  const { showCart } = useContext(CartContext)


  return (
    <main className="main">
      {
        showCart ?
          <Cart />
          :
          <Shop />
      }
    </main>
  );
}

export default Main;