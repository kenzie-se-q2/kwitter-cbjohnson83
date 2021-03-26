import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";
import MessageList from "../views/MessageList";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <>
      <Menu />
      <h2>Your favorite microblogging platform</h2>
      {!user.token && <Login />}
      {user.token && <MessageList/>}
    </>
  );
}

export default Home;
