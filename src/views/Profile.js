import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../store/store";
import { getUserPhoto } from "../fetchRequests";
import { Link } from "react-router-dom";
import DeleteUser from "../components/DeleteUser";

function Profile() {
  const authUser = useStore((state) => state.user);

  const [currentUser, setCurrentUser] = useState({
    username: "",
    displayName: "",
    about: "",
  });

  useEffect(() => {
    fetch("https://socialapp-api.herokuapp.com/users/" + authUser.username)
      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp.user));
  }, [authUser]);
  {/* <!-- ////////////////////////////////////////////////////////////
    It would be best practice to import the variable from fetchRequests.js 
    so that if it ever needs to be changed it only has to be changed in one place.
  //////////////////////////////////////////////////////////// --> */}
  

  return (
    <>
      <Card.Body>
        <div>
          <img src={getUserPhoto(authUser.username)} />
          <h1>
            <Card.Title>Profile Information: </Card.Title>
          </h1>
        </div>
        <div>Username: </div>
        <Card.Text>{currentUser.username}</Card.Text>
        <div>Display Name: </div>
        <Card.Text>{currentUser.displayName}</Card.Text>
        <div>About Me:</div>
        <Card.Text>{currentUser.about}</Card.Text>
        <div>Created At: </div>
        <Card.Text>{currentUser.createdAt}</Card.Text>
        <div>Updated At:</div>
        <Card.Text>{currentUser.updatedAt}</Card.Text>
      </Card.Body>
      <button>
        <Link to="/userupdate">Update User Information</Link>
      </button>

      {/* <Link to="/">Delete User Profile</Link> */}
      <DeleteUser />
    </>
  );
}

export default Profile;
