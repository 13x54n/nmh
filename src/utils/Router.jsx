import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../pages/Signin";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import RegisterUser from "../pages/RegisterUser";
import RecoveryUser from "../pages/RecoveryUser";

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
          path: "*",
          element: <>404 Not Found</>,
        },
      ]);
    
      return <RouterProvider router={router} />;
}
