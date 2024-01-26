import React from "react";
import Navbar from "./Navbar/index.jsx";

export default function Layout(props) {
  return (
    <div className="relative">
      <Navbar />
      {props.children}
    </div>
  );
}
