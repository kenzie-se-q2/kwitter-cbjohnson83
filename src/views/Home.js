import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";
import {Link} from "react-router-dom"

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Menu />
      <h2>Your favorite microblogging platform</h2>
      {!user.token && <Login />}
      {!user.token && <p>New User? <Link to = "/NewAccount">Create Account</Link></p>}
    </>
  );
}

export default Home;
