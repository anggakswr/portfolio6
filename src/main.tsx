import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects.tsx";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";
import Contents from "./pages/Contents.tsx";
import Contact from "./pages/Contact.tsx";
import Gears from "./pages/Gears.tsx";
import Classes from "./pages/Classes.tsx";
import Codes from "./pages/Codes.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contents",
        element: <Contents />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "gears",
        element: <Gears />,
      },
      {
        path: "classes",
        element: <Classes />,
      },
      {
        path: "codes",
        element: <Codes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
