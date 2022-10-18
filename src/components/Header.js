import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const auth = localStorage.getItem("user");
  const j = JSON.parse(auth);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Loop Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About us
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li className="nav-item">
                {auth ? (
                  <>
                    Welcome {j.fields.username}!
                    <Link onClick={logout} className="nav-link" to="/login">
                      Logout
                    </Link>
                  </>
                ) : (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
