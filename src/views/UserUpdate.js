import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store/store";
import { putUserPicture } from "../fetchRequests";
import { Link } from "react-router-dom";

function UserUpdate() {
  const authUser = useStore((state) => state.user);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    displayName: "",
    about: "",
  });
  const [newPicture, setNewPicture] = useState({});

  useEffect(() => {
    fetch("https://socialapp-api.herokuapp.com/users/" + authUser.username)
      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp.user));
  }, [authUser]);

  function handleSubmitUserUpdate(event) {
    event.preventDefault();
    fetchUser(
      authUser.token,
      authUser.username,
      currentUser.about,
      currentUser.displayName
    );
    alert("User Information Update Successful");
  }

  function fetchUser(token, username, about, displayName) {
    return fetch("https://socialapp-api.herokuapp.com/users/" + username, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ about, displayName }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  // console.log(currentUser);
  function handleOnChange(event) {
    const { name, value } = event.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  }

  function handleSubmitPhoto(event) {
    putUserPicture(authUser.token, authUser.username, newPicture).then((res) =>
      console.log(res)
    );
    alert("Picture Upload Successful");
  }

  return (
    <>
      <Container>
        <Form>
          <Form.Group controlId="pageTitle">
            <h1>User Update Page</h1>
          </Form.Group>
        </Form>

        <Form onSubmit={handleSubmitUserUpdate}>
          <Form.Group controlId="changeDisplayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              value={currentUser.displayName}
              name="displayName"
              type="text"
              onChange={handleOnChange}
              placeholder="Change Display Name"
            />
          </Form.Group>

          <Form.Group controlId="changeAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              value={currentUser.about}
              name="about"
              type="text"
              onChange={handleOnChange}
              placeholder="Change about"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update User Information
          </Button>
        </Form>
      </Container>
      <div>
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0]);
            setNewPicture(e.target.files[0]);
          }}
        />

        <button onClick={handleSubmitPhoto}>update my photo</button>
      </div>
      <button>
        <Link to="/">Profile</Link>
      </button>
    </>
  );
}

export default UserUpdate;
