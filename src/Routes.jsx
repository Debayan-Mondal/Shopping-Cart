import { Children } from "react";
import App from "./App";
import Home from "./Home";
import Store from "./Store";

const routes = [
    {
      path: "/",
      element: <App /> ,
      children: [
        {index: true, element: <Home />},
        {path:"store", element: <Store />},
        {path: "home", element: <Home />}
      ]
    }
]

export default routes;