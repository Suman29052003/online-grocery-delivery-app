import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "/logo.png";
import cart from "/cart.png";
import user from "/user.png";
import menu from "/menu.png";
import { isLoggedIn } from "../auth";
import { HashLink } from "react-router-hash-link";



const Navbar = ({ isCartEmpty, totalUniqueItems }) => {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu toggle
const navigate = useNavigate()
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogOut = () =>{
    localStorage.removeItem('token')
    window.location.reload()
    navigate('/')
  }

  return (
    <section className="w-full flex items-center justify-between p-4 bg-white shadow-md z-0">
      <div className="logo">
        <img src={logo} alt="Logo" className="w-[8rem]" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex anchor-links">
        <ul className="flex gap-6 text-xl items-center">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={`cursor-pointer hover:scale-105 ${
              active === "Home"
                ? "border-b-[3px] border-[green] rounded-sm pb-1"
                : ""
            }`}
          >
            Home
          </Link>
          <HashLink
            to="/#about"
            onClick={() => setActive("About")}
            className={`cursor-pointer hover:scale-105 ${
              active === "About"
                ? "border-b-[3px] border-[green] rounded-sm pb-1"
                : ""
            }`}
          >
            About
          </HashLink>
          <a
            href="#items"
            onClick={() => setActive("Items")}
            className={`cursor-pointer hover:scale-105 ${
              active === "Items"
                ? "border-b-[3px] border-[green] rounded-sm pb-1"
                : ""
            }`}
          >
            Items
          </a>
          <HashLink
            to="/#contact"
            onClick={() => setActive("Contact")}
            className={`cursor-pointer hover:scale-105 ${
              active === "Contact"
                ? "border-b-[3px] border-[green] rounded-sm pb-1"
                : ""
            }`}
          >
            Contact
          </HashLink>
          <HashLink
            to="/profile"
            onClick={() => setActive("Profile")}
            className={`cursor-pointer hover:scale-105 ${
              active === "Profile"
                ? "border-b-[3px] border-[green] rounded-sm pb-1"
                : ""
            }`}
          >
            Profile
          </HashLink>

          {/* Cart and User Icons */}
          <Link to="/cart" className="relative cursor-pointer hover:scale-105">
            <li>
              <img src={cart} alt="Cart" className="w-8" />
              {!isCartEmpty && (
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {totalUniqueItems}
                </div>
              )}
            </li>
          </Link>

          {isLoggedIn() ? (
            <Button variant="contained" color="error" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Link to="/signup" className="cursor-pointer hover:scale-105">
              <Button variant="contained" color="success">
                Sign Up
              </Button>
            </Link>
          )}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <img src={menu} alt="Menu" className="w-8" />
        </button>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-10">
          <ul className="flex flex-col items-center gap-6 p-4">
            <Link
              to="/"
              onClick={() => {
                setActive("Home");
                toggleMenu();
              }}
              className={`cursor-pointer hover:scale-105 ${
                active === "Home"
                  ? "border-b-[3px] border-[green] rounded-sm pb-1"
                  : ""
              }`}
            >
              Home
            </Link>
            <HashLink
              to="/#about"
              onClick={() => {
                setActive("About");
                toggleMenu();
              }}
              className={`cursor-pointer hover:scale-105 ${
                active === "About"
                  ? "border-b-[3px] border-[green] rounded-sm pb-1"
                  : ""
              }`}
            >
              About
            </HashLink>
            <HashLink
              to="/#items"
              onClick={() => {
                setActive("Items");
                toggleMenu();
              }}
              className={`cursor-pointer hover:scale-105 ${
                active === "Items"
                  ? "border-b-[3px] border-[green] rounded-sm pb-1"
                  : ""
              }`}
            >
              Items
            </HashLink>
            <HashLink
              to="/#contact"
              onClick={() => {
                setActive("Contact");
                toggleMenu();
              }}
              className={`cursor-pointer hover:scale-105 ${
                active === "Contact"
                  ? "border-b-[3px] border-[green] rounded-sm pb-1"
                  : ""
              }`}
            >
              Contact
            </HashLink>
            <Link
              to="/profile"
              onClick={() => {
                setActive("Profile");
                toggleMenu();
              }}
              className={`cursor-pointer hover:scale-105 ${
                active === "Profile"
                  ? "border-b-[3px] border-[green] rounded-sm pb-1"
                  : ""
              }`}
            >
              Profile
            </Link>
            

            {/* Cart and User Icons in Mobile Menu */}
            <Link
              to="/cart"
              onClick={toggleMenu}
              className="relative cursor-pointer hover:scale-105"
            >
              <li>
                <img src={cart} alt="Cart" className="w-8" />
                {!isCartEmpty && (
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                    {totalUniqueItems}
                  </div>
                )}
              </li>
            </Link>

            {isLoggedIn() ? (
              <Button
                variant="contained"
                color="error"
                onClick={handleLogOut}
              >
                Logout
              </Button>
            ) : (
              <Link
                to="/signup"
                onClick={() => toggleMenu()}
                className="cursor-pointer hover:scale-105"
              >
                <Button variant="contained" color="success">
                  Sign Up
                </Button>
              </Link>
            )}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
