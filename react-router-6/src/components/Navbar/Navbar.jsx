import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import bgImg from "../assets/home-hero.png";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log("location", location);

  const homeIsActive = useLocation().pathname === "/";

  return (
    <div className="navbar-maindesign">
      <div className="navbar-left">
        <img src={bgImg} width="40" height="40" alt="" />
        <NavLink
          className={homeIsActive ? "navbar-link" : "navbar-linknotactive"}
          to="/"
        >
          <strong>#VANLIFE</strong>
        </NavLink>
      </div>

      <div className="navbar-right">
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link" : "navbar-linknotactive"
          }
          to="/host"
        >
          Host{" "}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link" : "navbar-linknotactive"
          }
          to="/about"
        >
          {" "}
          About{" "}
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar-link" : "navbar-linknotactive"
          }
          to="/Vans"
        >
          {" "}
          Vans{" "}
        </NavLink>

        <Link to="/signin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            stroke="currentColor"
            strokeWidth={1.5}
            width={30}
            viewBox="1 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Header;
