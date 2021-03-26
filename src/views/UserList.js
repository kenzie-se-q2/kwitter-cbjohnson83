import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function UserCard() {
  const history = useHistory();

  return (
    <Card style={{ width: "18 rem" }}>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>{user.displayName}</Card.Text>
        <Button
          onClick={() => history.push(`/users/${user.username}`)}
          variant="primary"
        >
          See user
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
