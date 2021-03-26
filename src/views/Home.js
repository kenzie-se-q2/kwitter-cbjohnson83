import { useState } from "react";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import React from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import Profile from "./Profile";
import AllUsers from "./allUsers";

function Home(props) {
  const user = useStore((state) => state.user);
  const [showUserList, setShowUserList] = useState(false);
  const handleShowUserList = () => {
    setShowUserList(true);
  };
  const hideUserList = () => {
    setShowUserList(false);
  };

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
      {user.token && <Profile />}
      {!user.token &&
        (showUserList === false ? (
          <button onClick={handleShowUserList}>Show List of Users</button>
        ) : (
          <>
            <button onClick={hideUserList}>Hide List</button>
            <AllUsers />
          </>
        ))}
    </>
  );
}

export default Home;
