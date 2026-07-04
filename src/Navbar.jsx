import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-white" to="/">
         Foodie
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">

            <li className="nav-item mx-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item mx-2">
              <NavLink
                to="/Menu"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Menu
              </NavLink>
            </li>

          </ul>
          <div className="d-flex align-items-center">

            <Link
              to="/Cart"
              className="position-relative text-white me-4"
            >
              <i className="fa-solid fa-bag-shopping fs-4 text-light iconn"></i>

            
            </Link>
            <div className="dropdown">
              <button
                className="btn border-0"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-person-circle fs-4"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">

                <li>
                  <Link className="dropdown-item" to="/Admin">
                    Admin
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/">
                    User
                  </Link>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}