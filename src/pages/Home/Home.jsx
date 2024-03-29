import React, { useEffect } from "react";
import SidebarItems from "../../utils/Sidebar.json";
import ProductCard from "../../components/ProductCard";
import Foods from "../../utils/Foods.json";
import "./styles/style.css";

export default function Home() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);

    el.scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "start",
    });
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="relative home__container">
      <div className="offerBanner">
        <img
          className="h-40 w-[100%] object-cover"
          src="https://images.unsplash.com/photo-1652862730506-9f7310faabbd?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="Nepali Momo House"
        />
      </div>
      <div className="flex flex-row items-start gap-4 mx-[5vw] my-5 text-md main">
        <div className="sidebar flex flex-col sticky top-20 home__sidebar">
          {SidebarItems.map((item, index) => {
            return (
              <button
                onClick={() => handleScroll(item.key)}
                className="text-left text-md py-2.5 w-[15vw] font-medium focus:outline-none"
                key={index}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <main className="flex-1">
          <div className="searchContainer flex-1 flex items-center gap-1 background-secondary p-2 px-4 rounded-[500px] mx-4 navbar__hide_small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              className="font-medium inputContainer text-sm border-none focus:border-transparent focus:ring-0"
              type="text"
              placeholder="Momo, chowmein, drinks, etc"
            />
          </div>
          {SidebarItems.map((item, index) => {
            return (
              <div
                key={index}
                className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 border-b-2 pb-7 mb-4"
                id={item.key}
              >
                <h2 className="text-xl font-bold tracking-tight text-gray-900">
                  {item.name}
                </h2>

                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                  {Foods[item.key].map((product, index) => {
                    return <ProductCard key={index} product={product} />;
                  })}
                </div>
              </div>
            );
          })}
        </main>
      </div>
      <button onClick={() => goToTop()} className="goToTop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
