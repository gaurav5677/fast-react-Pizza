import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { Menu as menuLoader } from "./feature/menu/Menu";
import Cart from "./feature/cart/Cart";
import CreateOrder from "./feature/order/CreateOrder";
import Order from "./feature/order/Order";
import AppLayout from "./ui/AppLayout";
// import { Children } from "react";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    //  since the above one doesn't have any route therefore it is called as React Router
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

createBrowserRouter;
function App() {
  return <RouterProvider router={router} />;
}

export default App;
