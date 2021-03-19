// const { NavLink } = require("react-router-dom");
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id>
        {/* <NavLink></NavLink> */}
        {/* <NavMenu> */}
        <Link to="/about">About</Link>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/messages">Contact Us</Link>
        {/* </NavMenu> */}
        {/* <NavBtn></NavBtn> */}
      </div>
    </>
  );
};

export default Navbar;
