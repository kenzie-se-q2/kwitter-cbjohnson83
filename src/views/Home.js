import React, { useState } from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import AllUsers from "./allUsers";
import Profile from "./Profile";

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
      <h2>Your favorite microblogging platform</h2>
      {!user.token && <Login />}
      {user.token && <Profile />}

      {!user.token && (
        <p>
          New User? <Link to="/users">Create Account</Link>
        </p>
      )}
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
