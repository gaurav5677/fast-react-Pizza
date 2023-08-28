import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { Menu as menuLoader } from "./feature/menu/Menu";
import Cart from "./feature/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./feature/order/CreateOrder";
import Order, { lorder as orderLoader } from "./feature/order/Order";
import AppLayout from "./ui/AppLayout";
// import { Children } from "react";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    //  since the above one doesn't have any route therefore it is called as React Router

    errorElement: <Error />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

createBrowserRouter;
function App() {
  return <RouterProvider router={router} />;
}

export default App;
