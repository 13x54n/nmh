import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./utils/Router";
import { CartProvider } from "./contexts/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered:", registration);
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CartProvider>
      <Router />
    </CartProvider>
    <ToastContainer />
  </>
);
