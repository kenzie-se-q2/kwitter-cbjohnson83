import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function UserCard() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://kwitter-api-b.kerokuapp.com/users/{username}")
      .then((resp) => resp.json())
      .then((resp) => setUser(resp.user.username));
  }, []);

  return (
    <Container>
      <Card style={{ width: "18 rem" }}>
        <Card.Body>
          <Card.Title>User Information: </Card.Title>
          <div>Username: </div>
          <Card.Text>{user.username}</Card.Text>
          <div>Display Name: </div>
          <Card.Text>{user.displayName}</Card.Text>
          <div>About Me:</div>
          <Card.Text>{user.about}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserCard;
