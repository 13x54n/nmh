import React, { useState } from "react";
import SidebarItems from "../utils/Sidebar.json";
import ProductCard from "../components/ProductCard";
import Foods from "../utils/Foods.json";
import ProductQuickView from "../components/ProductQuickview";

export default function Home() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);

    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };

  return (
    <div className="relative">
      
      <div className="offerBanner">
        <img
          className="h-40 w-[100%] object-cover"
          src="https://images.unsplash.com/photo-1652862730506-9f7310faabbd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt=""
        />
        <div className="flex flex-row items-start gap-4 mx-[5vw] my-5 text-md">
          <div className="sidebar flex flex-col sticky top-20">
            {SidebarItems.map((item, index) => {
              return (
                <button
                  onClick={() => handleScroll(item.key)}
                  className="text-left py-2.5 w-[15vw] font-medium focus:outline-none"
                  key={index}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
          <main className="flex-1">
            {SidebarItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 border-b-2 pb-7 mb-4"
                  id={item.key}
                >
                  <h2 className="text-xl font-bold tracking-tight text-gray-900">
                    {item.name}
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                    {Foods[item.key].map((product, index) => {
                      return <ProductCard key={index} product={product} />;
                    })}
                  </div>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
