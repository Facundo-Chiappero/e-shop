import { Sad } from "@components/Icons";
import { SHOP_TXT } from "@consts/consts";
import CategoriesAndProductsContext from "@context/CategoriesAndProductsContext";
import useHandleCart from "@hooks/useHandleCart";
import { useContext } from "react";

function Shop() {

  const { productsToUse } = useContext(CategoriesAndProductsContext);
  const { inCart, handleUpdateCart } = useHandleCart({ productsToUse })

  return (
    productsToUse.length > 0 ? (
      productsToUse.map((product) => (
        <div className="product" key={product.id}>
          <p>
            {product.nombre} - ${product.precio}
          </p>
          <img src={product.imagen} alt={product.nombre} />
          <button onClick={() => handleUpdateCart(product.id)}>
            {inCart.find((item) => item.id === product.id)
              ? SHOP_TXT.ADD_TXT
              : SHOP_TXT.REMOVE_TXT}
          </button>
        </div>
      ))
    ) : (
      <div className="noProducts">
        <Sad />
        <p>{SHOP_TXT.NO_PRODUCTS}</p>
      </div>
    )
  );
}

export default Shop;