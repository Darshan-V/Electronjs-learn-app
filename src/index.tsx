import * as React from "react";
import * as ReactDOM from "react-dom/client";
import * as ReactRouter from "react-router-dom";

import Home from "./pages/Home";

const router = ReactRouter.createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReactRouter.RouterProvider router={router} />
  </React.StrictMode>
);
