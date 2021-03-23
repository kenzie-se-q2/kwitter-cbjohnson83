import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getUserProfile } from "../fetchRequests";
import { Link } from "react-router-dom";

function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserProfile().then((data) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <Card style={{ width: "18 rem" }}>
      <Card.Body>
        <Card.Title>User Information: </Card.Title>
        <div>Username: </div>
        <Card.Text>{users.username}</Card.Text>
        <div>Display Name: </div>
        <Card.Text>{users.displayName}</Card.Text>
        <div>About Me:</div>
        <Card.Text>{users.about}</Card.Text>
      </Card.Body>
      <Link to="/userupdate">User Update</Link>
    </Card>
  );
}

export default Profile;
