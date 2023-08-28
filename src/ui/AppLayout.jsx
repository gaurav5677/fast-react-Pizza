import { Outlet } from "react-router-dom";
import CartOverview from "../feature/cart/CartOverview";
import Header from "./Header";
function AppLayout() {
  // parent route for every single other route
  return (
    <div>
      <Header />

      <main>
        <h1>Content </h1>
        <Outlet />
        {/* To render the content of a nested route inside another route  */}
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
