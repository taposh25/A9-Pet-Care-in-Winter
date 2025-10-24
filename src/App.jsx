// import { createBrowserRouter } from "react-router-dom";
// import RootLayout from "./layouts/RootLayout";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import ServiceDetails from "./pages/ServiceDetails";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import ForgotPassword from "./pages/ForgotPassword";
// import Checkout from "./pages/Checkout";
// import PrivateRoute from "./components/PrivateRoute";

import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import PrivateRoute from "./components/PrivateRoute";
import ServiceDetails from "./Pages/ServiceDetails";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout, 
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },
       {
        path: "/home/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      { path: "login", Component:Login },
      { path: "register", Component: Register},
      { path: "forgot-password", Component: ForgotPassword },
    ],
  },
]);

export default router;
