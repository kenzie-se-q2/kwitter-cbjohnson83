// const { NavLink } = require("react-router-dom");
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="nav">
        {/* <NavLink></NavLink> */}
        {/* <NavMenu> */}
        <div id="navAbout">
          <Link to="/about">About</Link>
        </div>
        <div id="navSignUp">
          <Link to="/sign-up">Sign Up</Link>
        </div>
        <div id="contactUs">
          <Link to="/contactUs">Contact Us</Link>
        </div>
        {/* </NavMenu> */}
        {/* <NavBtn></NavBtn> */}
      </div>
    </>
  );
};

export default Navbar;
