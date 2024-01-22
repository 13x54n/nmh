import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

export default function Layout() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
    </div>
  );
}
