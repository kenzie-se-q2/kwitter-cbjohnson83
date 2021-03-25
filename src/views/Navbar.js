// const { NavLink } = require("react-router-dom");
import { Link } from "react-router-dom";
// import Glogin from "./GoogleLogin";
import { useEffect } from "react";
import { LOGIN, useStore } from "../store/store";

const Navbar = () => {
  const dispatch = useStore((state) => state.dispatch);

  function handleMessage(event) {
    console.log(event);
    dispatch({ type: LOGIN, payload: event.data });
  }
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  function handleGoogleLogin(e) {
    window.open("http://kwitter-api-b.herokuapp.com/auth/google/login");
  }
  return (
    <>
      <div id="nav">
        {/* <NavLink></NavLink> */}
        {/* <NavMenu> */}
        <div id="navAbout">
          <Link to="/about">Profile</Link>
        </div>
        <div id="navSignUp">
          <Link to="/sign-up">Sign Up</Link>
        </div>
        <div id="contactUs">
          <Link to="/contactUs">Contact Us</Link>
        </div>
        <button onClick={handleGoogleLogin}>Google Sign In</button>
      </div>
      {/* </NavMenu> */}
      {/* <NavBtn></NavBtn> */}

      {/* <Glogin /> */}
    </>
  );
};

export default Navbar;
