import { Minus, Plus, Sad } from "@components/Icons";
import { CART_TXT } from "@consts/consts";
import CategoriesAndProductsContext from "@context/CategoriesAndProductsContext";
import useGetCartToUse from "@hooks/useCartProducts";
import useHandleCart from "@hooks/useHandleCart";
import { useContext } from "react";

function Cart() {
  const { productsToUse } = useContext(CategoriesAndProductsContext);

  const { inCart, handleUpdateCart, amounts, setAmounts } = useHandleCart({ productsToUse })
  const { cartToUse } = useGetCartToUse({ inCart });


  return cartToUse.length > 0 ? (
    cartToUse.map((product) => {
      const amount = amounts[product.id] || 1;
      return (
        <div className="product" key={product.id}>
          <p>
            {product.nombre} - ${product.precio}
          </p>
          <img src={product.imagen} alt={product.nombre} />
          <div>
            <button onClick={() => handleUpdateCart(product.id)}>
              {cartToUse.find((item) => item.id === product.id)
                ? CART_TXT.ADD_TXT
                : CART_TXT.REMOVE_TXT}
            </button>
            <div>
              <button
                className="btn"
                onClick={() => setAmounts((prev) => ({
                  ...prev,
                  [product.id]: Math.max((prev[product.id] || 1) - 1, 1),
                }))}
              >
                <Minus />
              </button>
              <div className="data">
                <small>{CART_TXT.CANTIDAD}</small>
                <p>{amount}</p>
              </div>
              <button
                className="btn"
                onClick={() => setAmounts((prev) => ({
                  ...prev,
                  [product.id]: (prev[product.id] || 1) + 1,
                }))}
              >
                <Plus />
              </button>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="noProducts">
      <Sad />
      <p>{CART_TXT.NO_PRODUCTS}</p>
    </div>
  );
}

export default Cart;