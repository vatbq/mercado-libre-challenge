import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Paths } from "constants/paths";
import Home from "pages/Home";
import Item from "pages/Item";
import Items from "pages/Items";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: Paths.Home,
      element: <Home />,
    },
    {
      path: Paths.Items,
      element: <Items />,
    },
    {
      path: Paths.Item,
      element: <Item />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
