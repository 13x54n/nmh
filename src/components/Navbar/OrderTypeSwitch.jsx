import React, { useState } from "react";
import "./style.css";

export default function OrderTypeSwitch() {
  const [active, setActive] = useState("2go");

  const handleTypeSwitch = () => {
    if (active === "dine") {
      setActive("2go");
    } else {
      setActive("dine");
    }
  };
  return (
    <div className="background-secondary rounded-[500px] p-1 px-1 flex text-sm">
      <button
        onClick={() => handleTypeSwitch()}
        className={`${active === "2go" && "active"} px-3`}
      >
        Takeout
      </button>
      <button
        onClick={() => handleTypeSwitch()}
        className={`${active === "dine" && "active"} px-3`}
      >
        Dine in
      </button>
    </div>
  );
}
