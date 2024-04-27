import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SignIn } from "./screens/SignIn";
import { HelpPage } from "./screens/HelpPage";
import { UserHomePage } from "./screens/UserHomePage";
import { OrganizationPage } from "./screens/OrganizationPage";
import { UserProfile } from "./screens/UserProfile";
import { CardRequestPage } from "./screens/CardRequestPage";
import { LandingPage } from "./screens/LandingPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <SignIn />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/help-page",
    element: <HelpPage />,
  },
  {
    path: "/user-home-page",
    element: <UserHomePage />,
  },
  {
    path: "/organization-page",
    element: <OrganizationPage />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: "/card-request-page",
    element: <CardRequestPage />,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
