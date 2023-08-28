import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../feature/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
function AppLayout() {
  // parent route for every single other route

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}
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
