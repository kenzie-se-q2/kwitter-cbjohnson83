import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LOGIN, useStore } from "../store/store";

const Navbar = () => {
  const dispatch = useStore((state) => state.dispatch);
  function handleMessage(event) {
    if (!event || !event.data || !event.data.token) {
      return;
    }
    dispatch({ type: LOGIN, payload: event.data });
  }
  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  function handleGoogleLogin(e) {
    window.open("https://socialapp-api.herokuapp.com/auth/google/login");
  }
  return (
    <>
      <div id="nav">
        <div id="home">
          <Link to="/">Home</Link>
        </div>
        <div id="navSignUp">
          <Link to="/newaccount">Sign Up</Link>
        </div>
        <div id="Search">
          <Link to="/Feeds">Search Articles</Link>
        </div>
        <button onClick={handleGoogleLogin}>Google Sign In</button>
      </div>
    </>
  );
};
export default Navbar;
