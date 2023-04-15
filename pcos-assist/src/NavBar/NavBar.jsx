import "./NavBar.css";
import logo from "./logo.png";
import { useNavigate, Link } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const svgHandler = () => {
    navigate({ pathname: "/" });
  };
  return (
    <nav className="navbar navbar-light nav-class">
      <div>
        <Link style={{ marginLeft: "3%" }} className="link-style" to="/">
          Community Forum
        </Link>
        <Link className="link-style" to="/">
          Preventive Measures
        </Link>
        <Link className="link-style" to="/">
          Diagnosis
        </Link>
        <Link className="link-style" to="/">
          Awareness Tutorials
        </Link>
        <button type="submit" className="btn mr1 button-col">
          My Progress
        </button>
        <button type="submit" className="btn mr2 button-col">
          Settings
        </button>
        <svg
          onClick={svgHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="70"
          fill="primary"
          className="bi bi-person-fill mr3"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </nav>
  );
};
export default NavBar;
