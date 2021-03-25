import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../store/store";
import { getUserPhoto } from "../fetchRequests";
import { Link } from "react-router-dom";

function Profile() {
  const authUser = useStore((state) => state.user);

  const [currentUser, setCurrentUser] = useState({
    username: "",
    displayName: "",
    about: "",
  });

  useEffect(() => {
    fetch("https://kwitter-api-b.herokuapp.com/users/" + authUser.username)
      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp.user));
  }, [authUser]);

  return (
    <>
      <Card.Body>
        <div>
          <img src={getUserPhoto(authUser.username)} alt="Starting image" />
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
      </Card.Body>
      <button>
        <Link to="/userupdate">Update User Information</Link>
      </button>
    </>
  );
}

export default Profile;
