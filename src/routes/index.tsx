import { createBrowserRouter } from "react-router-dom";
import AppWrapperLayout from "../layouts/AppWrapperLayout";
import RootLayout from "../layouts/RootLayout";
import DashboardPage from "../pages/DashboardPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ProtectedRouteComponent from "../components/protected.route";
import Profil from "../pages/ProfilePage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapperLayout />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "/profile",
            element: <Profil />,
          },
        ],
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);
