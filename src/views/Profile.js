

import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../store/store";
import { getUserProfile } from "../fetchRequests";

function Profile({ match }) {
  const authUser = useStore((state) => state.user);
  const [user, setUser] = useState([]);
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [picture, setPicture] = useState({});

  useEffect(() => {
    getUserProfile(match.params.username).then((data) => {
      setPicture(data.user.pictureLocation);
      setUser(data.user);
      setDisplayName(data.user.displayName);
      setAbout(data.user.about);
    });
  }, [match]);

  return (
    <Card style={{ width: "18 rem" }}>
      <Card.Img variant="top" src="getUserPhoto" />
      <Card.Body>
        <Card.Title>User Information: </Card.Title>
        <div>Username: </div>
        <Card.Text>{user.username}</Card.Text>
        <div>Display Name: </div>
        <Card.Text>{user.displayName}</Card.Text>
        <div>About Me:</div>
        <Card.Text>{user.about}</Card.Text>
      </Card.Body>
      <button to="/userupdate">User Update</button>
    </Card>
  );
}

export default Profile;

