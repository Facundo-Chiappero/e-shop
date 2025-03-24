# ESPAÑOL

Puedes acceder al sitio web desde el siguiente enlace desde tu PC o celular: [E-SHOP](https://e-shop-proyect.netlify.app/)

Esta es una aplicación simple de **E-Shop** construida con **React**. Consume una API para mostrar productos y permite a los usuarios filtrar productos por **precio** y **categoría**. Las categorías se generan dinámicamente en función de los productos devueltos por la API, lo que facilita las actualizaciones cuando se cambia la API.

## Características

- **Mostrar Productos**: Los productos se obtienen y se muestran desde una API externa.
- **Filtro por Categoría**: Permite filtrar productos según las categorías, las mismas se generan dinámicamente según los productos disponibles.
- **Filtro por Precio**: Permite filtrar productos por precio mínimo.
- **Gestión de Carrito**: Agregar y eliminar productos del carrito, con ajustes de cantidad.
- **Context API**: Utiliza `useContext` para gestionar y compartir datos entre componentes, incluyendo los filtros, productos y el estado del carrito.
- **Llamadas a la API reutilizables**: La lógica de las llamadas a la API está separada para facilitar la reutilización y actualización futura del código.
- **Componentes**: La aplicación incluye los componentes `Header`, `Main`, `Shop` y `Cart` para una estructura limpia y organizada.
- **Iconos**: Los iconos se encuentran en un archivo `.jsx` para facilitar su uso
- **Persistencia de Datos**: Los productos y el estado del carrito se mantienen incluso después de cerrar la aplicación utilizando `localStorage`.
- **Modo Oscuro y Claro**: La aplicación permite alternar entre el modo oscuro y el modo claro, mejorando la accesibilidad y la experiencia del usuario.

## Componentes

- **Header**: Contiene los filtros y el botón para cambiar entre el carrito de compras y la tienda.
- **Main**: El contenedor principal que aloja las secciones de tienda (Shop) y carrito (Cart).
- **Shop**: Muestra la lista de productos, permite agregar y remover productos del carrito y permite filtrar por categoría y precio.
- **Cart**: Muestra los productos en el carrito, permite modificar la cantidad y eliminar productos.

## Hooks

- **useCartProducts**: Hook personalizado para aplicar los filtros dentro del carrito.
- **useGetProductsAndCategories**: Hook personalizado para obtener los productos filtrados y las categorías desde la API.
- **useHandleCart**: Hook personalizado para gestionar los productos en el carrito, incluyendo agregar/quitar productos y actualizar cantidades.

## Tecnologías Usadas

- **React**: Librería para construir interfaces de usuario.
- **React Context API**: Para gestionar el estado global como los filtros, carrito y productos.
- **Hooks Personalizados**: Para organizar las llamadas a la API y gestionar el estado dentro de los componentes.
- **API Externa**: Obtiene los datos de los productos y categorías de manera dinámica.

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/Facundo-Chiappero/e-shop.git
cd e-shop
npm install
npm run dev
```

# ENGLISH

You can access the website from the following link on your PC or mobile: [E-SHOP](https://e-shop-proyect.netlify.app/)

This is a simple **E-Shop** application built with **React**. It consumes an API to display products and allows users to filter products by **price** and **category**. Categories are dynamically generated based on the products returned from the API, making updates easier when changing the API.

## Features

- **Product Display**: Products are fetched and displayed from an external API.
- **Category Filter**: Allows filtering products by categories, which are dynamically generated based on the available products.
- **Price Filter**: Allows filtering products by minimum price.
- **Cart Management**: Add and remove products from the cart, with quantity adjustments.
- **Context API**: Uses `useContext` to manage and share data across components, including filters, products, and cart state.
- **Reusable API Calls**: API call logic is separated for easy reusability and future updates.
- **Components**: The app includes the `Header`, `Main`, `Shop`, and `Cart` components for a clean and organized structure.
- **Icons**: Icons are stored in a `.jsx` file to facilitate their usage.
- **Data Persistence**: Products and cart state are retained even after closing the application using `localStorage`.
- **Dark Mode and Light Mode**: The app allows toggling between dark mode and light mode for better accessibility and user experience.

## Components

- **Header**: Contains the filters and the button to toggle between the shopping cart and the store.
- **Main**: The main container that holds the `Shop` and `Cart` sections.
- **Shop**: Displays the list of products, allows adding/removing products from the cart, and enables filtering by category and price.
- **Cart**: Displays the products in the cart, allows modifying the quantity, and removes products.

## Hooks

- **useCartProducts**: Custom hook to apply filters inside the cart.
- **useGetProductsAndCategories**: Custom hook to fetch filtered products and categories from the API.
- **useHandleCart**: Custom hook to manage products in the cart, including adding/removing products and updating quantities.

## Technologies Used

- **React**: Library for building user interfaces.
- **React Context API**: To manage global state such as filters, cart, and products.
- **Custom Hooks**: For organizing API calls and managing state inside components.
- **External API**: Fetches product and category data dynamically.

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Facundo-Chiappero/e-shop.git
cd e-shop
npm install
npm run dev
```