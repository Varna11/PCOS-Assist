import "./NavBar.css";
import logo from "./logo.png";
import { useNavigate, Link } from "react-router-dom";
const NavBar = () => {
  // const navigate = useNavigate();
  // const svgHandler = () => {
  //   navigate({ pathname: "/" });
  // };
  return (
    <nav className="navbar navbar-light nav-class">
      <div>
        <img src={logo} className="img-size" alt="..." />
        <Link style={{ marginLeft: "1%" }} className="link-style" to="/communityForum">
          Community Forum
        </Link>
        <Link className="link-style" to="/preventiveMeasures">
          Preventive Measures
        </Link>
        <Link className="link-style" to="/diagnosis">
          Diagnosis
        </Link>
        <Link className="link-style" to="/awareness">
          Awareness Tutorials
        </Link>
        <Link className="link-style" style={{ marginLeft: "40%" }} to="/progress">
          My Progress
        </Link>
        <Link className="link-style" to="/settings">
          Settings
        </Link>
        {/* <svg
          onClick={svgHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="70"
          fill="primary"
          className="bi bi-person-fill "
          // viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg> */}
      </div>
    </nav>
  );
};
export default NavBar;
