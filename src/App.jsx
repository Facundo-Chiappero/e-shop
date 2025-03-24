import Main from "./components/Main";
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Icons";
import { renderToStaticMarkup } from "react-dom/server";
import { CategoriesAndProductsProvider } from "@context/CategoriesAndProductsContext";


function App() {
  const cartIconMarkup = renderToStaticMarkup(<Cart />);
  const cartIconDataUrl = `data:image/svg+xml;base64,${btoa(cartIconMarkup.replace(/currentColor/g, '#FFFFFF'))}`;

  return (
    <>
      <link rel="icon" type="image/svg+xml" href={cartIconDataUrl} />
      <div className="container">
        <CartProvider>
          <CategoriesAndProductsProvider>
            <Header />
            <Main />
          </CategoriesAndProductsProvider>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
