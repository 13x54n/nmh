import { useNavigate } from "react-router-dom";
import NavigationDetails from "./NavigationDetails";
import OrderTypeSwitch from "./OrderTypeSwitch";
import Sidebar from "../Sidebar";
import Cart from "../Cart";
import { auth } from "../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useCallback, useContext, useEffect, useState } from "react";
import "./styles/style.css";
import useWindowDimensions from "../../utils/WindowDimensions";
import { FilterContext } from "../../contexts/Filter";

export default function Navbar() {
  const [user, setUser] = useState();
  const { width } = useWindowDimensions();
  const { filterInput, setFilterInput } = useContext(FilterContext);

  const handleAuthStateChanged = useCallback(async (user) => {
    if (user) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_SERVER_URI}/user/authcheck`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
          }
        );

        if (response.ok) {
          // Handle success
          const responseData = await response.json();
        } else {
          // Handle error
          const errorData = await response.json();
          console.log("Error:", errorData.error);
        }
      } catch (error) {
        console.log("Error:", error.message);
      }

      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);

    return () => {
      unsubscribe();
    };
  }, [handleAuthStateChanged]);

  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(e);
  };

  return (
    <header className="bg-white flex flex-row items-center gap-3 justify-between p-3 px-[2vw] sticky top-0 z-20 border-b-2 navbar__container">
      <div className="flex flex-row items-center gap-2">
        {user?.email && width > 576 && (
          <>
            <Sidebar />
          </>
        )}

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <img
            className="w-10"
            src="https://ik.imagekit.io/13x54r/nmh/NMH.png?updatedAt=1705392802106"
            alt=""
            loading="lazy"
          />
          <button className="font-medium text-sm navbar__hide_small">
            Nepali Momo House
          </button>
        </div>
      </div>
      <OrderTypeSwitch />
      <NavigationDetails />
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
        value={filterInput}
        onChange={(e) => setFilterInput(e.target.value)}
          className="font-medium inputContainer text-sm border-none focus:border-transparent focus:ring-0"
          type="text"
          placeholder="Momo, chowmein, drinks, etc"
        />
      </div>

      <div className="flex flex-row items-center gap-3">
        <Cart />
        {!user && (
          <button
            className="text-sm flex items-center gap-1 background-secondary p-2 px-4 rounded-[500px]"
            onClick={() => handleNavigation("/auth/login")}
          >
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <p className="navbar__hide_small">Sign In </p>
          </button>
        )}
        {user?.email && width <= 576 && (
          <>
            <Sidebar />
          </>
        )}
      </div>
    </header>
  );
}
