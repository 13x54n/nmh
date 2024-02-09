import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../pages/Signin";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import RegisterUser from "../pages/RegisterUser";
import RecoveryUser from "../pages/RecoveryUser";
import Checkout from "../pages/Checkout";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Activities from "../pages/Activities";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/auth/login",
      element: (
        <Layout>
          <SignIn />
        </Layout>
      ),
    },
    {
      path: "/auth/register",
      element: (
        <Layout>
          <RegisterUser />
        </Layout>
      ),
    },
    {
      path: "/auth/recovery",
      element: (
        <Layout>
          <RecoveryUser />
        </Layout>
      ),
    },
    {
      path: "/checkout",
      element: (
        <Layout>
          <Checkout />
        </Layout>
      ),
    },
    {
      path: "/activities",
      element: (
        <Layout>
          <Activities />
        </Layout>
      ),
    },
    {
      path: "*",
      element: <>404 Not Found</>,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <SpeedInsights />
    </RouterProvider>
  );
}
