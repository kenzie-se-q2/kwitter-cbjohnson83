import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="nav">
        <div id="navAbout">
          <Link to="/about">About</Link>
        </div>
        <div id="navSignUp">
          <Link to="/sign-up">Sign Up</Link>
        </div>
        <div id="contactUs">
          <Link to="/contactUs">Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
