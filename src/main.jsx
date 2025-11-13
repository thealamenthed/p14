import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {router} from "./app/routes";
import "./index.css";

/**
 * Point d'entrée principal de l'application React
 * Configure le store Redux, le router React Router et monte l'application
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
