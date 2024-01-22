import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";

export default function Layout(props) {
  return (
    <div className="relative">
      <Navbar />
      {props.children}
    </div>
  );
}
