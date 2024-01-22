import { useNavigate } from "react-router-dom";
import NavigationDetails from "./Navbar/NavigationDetails";
import OrderTypeSwitch from "./Navbar/OrderTypeSwitch";

export default function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    navigate(e)
  }
  return (
    <header className="bg-white flex flex-row items-center gap-3 justify-between p-4 px-[2vw] sticky top-0 z-20">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation('/')}>
        <img className="w-10" src="https://ik.imagekit.io/13x54r/nmh/NMH.png?updatedAt=1705392802106" alt="" loading="lazy"/>
        <button className="font-medium text-sm">Nepali Momo House</button>
      </div>
      <OrderTypeSwitch/>
      <NavigationDetails/>
      <div className="searchContainer flex-1 flex items-center gap-1 background-secondary p-3 px-4 rounded-[500px] mx-4">
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
        <input className="inputContainer text-sm border-none focus:border-transparent focus:ring-0" type="text" placeholder="Momo, chowmein, drinks, etc" />
      </div>

      <button className="flex text-sm bg-black p-2 px-4 items-center text-white rounded-[500px] gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        <p>Cart • 0</p>
      </button>
      <button 
      className="text-sm flex items-center gap-1 background-secondary p-2 px-4 rounded-[500px]" 
      onClick={() => handleNavigation('/auth/login')}>
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
        <p>Sign In </p>
      </button>
    </header>
  );
}
