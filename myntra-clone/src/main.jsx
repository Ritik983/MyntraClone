import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./components/Bag.jsx";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import myntaStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntaStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
