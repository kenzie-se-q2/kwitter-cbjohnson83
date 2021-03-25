import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Menu />
      <div id="shareIdeas">
        <h2>A Place to Share Ideas. </h2>
      </div>
      <div id="noHate">
        <h3>NO HATE SPEECH ALLOWED!</h3>
      </div>
      {!user.token && <Login />}
      <p>
        New User? <Link to="/NewAccount">Create Account</Link>
      </p>
      {/* <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div> */}
    </>
  );
}

export default Home;
