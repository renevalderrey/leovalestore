import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import SiteJob from "./Pages/SiteJob";
import Inspo from "./Pages/Inspo";
import Promotions from "./Pages/Promotions";
import Information from "./Pages/Information";
import Contact from "./Pages/Contact";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicios",
    element: <Services />,
  },
  {
    path: "/sitiodetrabajo",
    element: <SiteJob />,
  },
  {
    path: "/inspo",
    element: <Inspo />,
  },
  {
    path: "/promociones",
    element: <Promotions />,
  },
  {
    path: "/informacion",
    element: <Information />,
  },
  {
    path: "/ubicacionycontacto",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider route={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
