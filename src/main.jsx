import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./utils/Router";
import { CartProvider } from "./contexts/Cart";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      {/* <SpeedInsights /> */}
      <Router />
    </CartProvider>
    <ToastContainer />
  </>
);
