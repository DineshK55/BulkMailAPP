import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Bulk Mail App
      </div>

      <div className="navbar-links">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Home
        </Link>

        <Link
          to="/history"
          className={
            location.pathname === "/history"
              ? "nav-link active"
              : "nav-link"
          }
        >
          History
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;