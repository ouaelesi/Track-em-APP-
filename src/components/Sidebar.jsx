import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import logo from "../assets/logo.png";
import home from "../assets/icons/home.png";
import users from "../assets/icons/users.png";
import recommendations from "../assets/icons/recommendations.png";
import guide from "../assets/icons/guide.png";
import settings from "../assets/icons/settings.png";
import logout from "../assets/icons/logout.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [active, setActive] = useState([1, 0, 0, 0]);
  const handleClick = (i) => {
    const a = [0, 0, 0, 0];
    a[i] = 1;
    setActive(a);
  };
  return (
    <aside
      className={`${
        isSidebarOpened ? "w-20 sm:w-72" : "w-20"
      } pt-8 duration-300 bg-sidebar h-screen sticky top-0`}
    >
      {isSidebarOpened ? (
        <AiOutlineLeft
          onClick={() => setIsSidebarOpened(!isSidebarOpened)}
          className={
            "absolute -right-4 cursor-pointer top-20 bg-green-500 text-white h-8 w-8 p-1 rounded-full"
          }
        />
      ) : (
        <AiOutlineRight
          onClick={() => setIsSidebarOpened(!isSidebarOpened)}
          className={
            "absolute -right-4 cursor-pointer top-20 bg-green-500 text-white h-8 w-8 p-1 rounded-full"
          }
        />
      )}
      <Link to="/" className="p-5 flex items-center gap-x-4 text-white">
        <img src={logo} alt="logo" />
      </Link>

      <ul className="p-5 pt-8">
        <Link
          to="/"
          className={`flex text-bg-text items-center gap-x-4 cursor-pointer hover:text-gray-400 p-2 rounded-md mt-2 ${
            active[0]
              ? "bg-blue-400 text-white font-semibold"
              : "bg-transparent"
          }`}
          onClick={() => handleClick(0)}
        >
          <img src={home} alt="home" />
          <span
            className={`hidden sm:flex ${
              !isSidebarOpened && "scale-0"
            } duration-300`}
          >
            Home
          </span>
        </Link>
        <Link
          to="/users"
          className={`flex text-bg-text items-center gap-x-4 cursor-pointer hover:text-gray-400 p-2 rounded-md mt-2 ${
            active[1]
              ? "bg-blue-400 text-white font-semibold"
              : "bg-transparent"
          }`}
          onClick={() => handleClick(1)}
        >
          <img src={users} alt="users" />
          <span
            className={`hidden sm:flex ${
              !isSidebarOpened && "scale-0"
            } duration-300`}
          >
            Users
          </span>
        </Link>
        <Link
          to="/recommendations"
          className={`flex text-bg-text items-center gap-x-4 cursor-pointer hover:text-gray-400 p-2 rounded-md mt-2 ${
            active[2]
              ? "bg-blue-400 text-white font-semibold"
              : "bg-transparent"
          }`}
          onClick={() => handleClick(2)}
        >
          <img src={recommendations} alt="recommendations" />
          <span
            className={`hidden sm:flex ${
              !isSidebarOpened && "scale-0"
            } duration-300`}
          >
            Recommendations
          </span>
        </Link>
        <Link
          to="/guide"
          className={`flex text-bg-text items-center gap-x-4 cursor-pointer hover:text-gray-400 p-2 rounded-md mt-2 ${
            active[3]
              ? "bg-blue-400 text-white font-semibold"
              : "bg-transparent"
          }`}
          onClick={() => handleClick(3)}
        >
          <img src={guide} alt="guide" />
          <span
            className={`hidden sm:flex ${
              !isSidebarOpened && "scale-0"
            } duration-300`}
          >
            Users Guide
          </span>
        </Link>
      </ul>
      <hr className="mt-60 border-1 border-solid border-bg-text w-full" />
      <ul className="p-5">
        <Link
          to="/settings"
          className="flex text-bg-text items-center gap-x-4 cursor-pointer hover:text-gray-400 p-2 rounded mt-2"
        >
          <img src={settings} alt="settings" />
          <span
            className={`hidden sm:flex ${
              !isSidebarOpened && "scale-0"
            } duration-300`}
          >
            Settings
          </span>
        </Link>
        <Link
          to="/logout"
          className="flex text-bg-text items-center gap-x-4 cursor-pointer hover:text-gray-400 p-2 rounded mt-2"
        >
          <img src={logout} alt="logout" />
          <span
            className={`hidden sm:flex ${
              !isSidebarOpened && "scale-0"
            } duration-300`}
          >
            Sign Out
          </span>
        </Link>
      </ul>
    </aside>
  );
}

export default Sidebar;
