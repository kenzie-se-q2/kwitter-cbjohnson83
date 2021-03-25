import React, { useState } from "react";
import Login from "../components/Login";
import Menu from "../components/Menu";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import AllUsers from "./allUsers";
import DeleteUser from "../components/DeleteUser";
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
      <div id="shareIdeas">
        <h2>A Place to Share Ideas. </h2>
      </div>
      <div id="noHate">
        <h3>NO HATE SPEECH ALLOWED!</h3>
      </div>
      {!user.token && <Login />}
AccountUpdate
      {user.token && <DeleteUser/>}

      {user.token && <Profile />}


      <p>
        New User? <Link to="/NewAccount">Create Account</Link>
      </p>
      {/* <div class="box">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div> */}


      {!user.token && <p>New User? <Link to = "/users">Create Account</Link></p>}
      {!user.token&&(
        showUserList=== false? 
        <button onClick = {handleShowUserList}>Show List of Users</button>:
        (
          <>
        <button onClick= {hideUserList}>Hide List</button>
        <AllUsers/>
        </>)
        
        


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
