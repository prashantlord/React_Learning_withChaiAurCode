import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-10 w-full h-20 shadow-xl ">
        <h1 className="text-2xl font-bold">
          <Link to="/">
            RandomApi
            <span className="text-red-800">Calls</span>
          </Link>
        </h1>
        <nav className="hidden sm:flex gap-5 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-red-800" : null}` +
              " font-semibold hover:text-red-700 transition-colors duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="favriote"
            className={({ isActive }) =>
              `${isActive ? "text-red-800" : null}` +
              " font-semibold hover:text-red-700 transition-colors duration-300"
            }
          >
            Favriotes{" "}
          </NavLink>
          <NavLink
            to="genderguessr"
            className={({ isActive }) =>
              `${isActive ? "text-red-800 flex" : "hidden"}` +
              " font-semibold hover:text-red-700 transition-colors duration-300"
            }
          >
            Guender Gussr
          </NavLink>
          <NavLink
            to="randomcat"
            className={({ isActive }) =>
              `${isActive ? "text-red-800 flex" : "hidden"}` +
              " font-semibold hover:text-red-700 transition-colors duration-300"
            }
          >
            Random Cat
          </NavLink>
          <NavLink
            to="jokes"
            className={({ isActive }) =>
              `${isActive ? "text-red-800 flex" : "hidden"}` +
              " font-semibold hover:text-red-700 transition-colors duration-300"
            }
          >
            Jokes
          </NavLink>
        </nav>
        <button className="border-red-700 border-2 p-2 rounded-full font-semibold cursor-pointer hover:bg-red-700 hover:text-white transition-colors duration-200 ease-in ">
          Random
        </button>
      </header>
    </>
  );
}

export default Header;
