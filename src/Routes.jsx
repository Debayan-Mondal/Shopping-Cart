import { Children } from "react";
import App from "./App";
import Home from "./Home";
import Store from "./Store";
import ProductPage from "./ProductPage";
import Cart from "./Cart";

const routes = [
    {
      path: "/",
      element: <App /> ,
      children: [
        {index: true, element: <Home />},
        {path: "store", element: <Store />},
        {path: "home", element: <Home />},
        {path: "cart", element: <Cart />},
        {path: "store/:id", element: <ProductPage />}
      ]
    }
]

export default routes;