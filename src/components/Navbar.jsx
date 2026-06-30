import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skill-assessment" },
    { name: "Business Ideas", path: "/business-ideas" },
    { name: "Roadmaps", path: "/roadmap/1" },
    { name: "Resources", path: "/resources" },
    { name: "Mentors", path: "/mentors" }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold flex items-center">
  <span className="text-teal-900">Entre</span>
  <span className="text-slate-600">Skill</span>
  <span className="ml-1 bg-amber-500 text-white text-xs px-2 py-0.5 rounded-md">Hub</span>
</Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">

          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-green-600"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* AUTH BUTTONS */}
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-green-600"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-green-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-green-600 text-white px-3 py-1 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 flex flex-col gap-3">

          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-green-600"
            >
              {link.name}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="text-gray-700"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="bg-green-600 text-white px-3 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

        </div>
      )}

    </nav>
  );
};

export default Navbar;