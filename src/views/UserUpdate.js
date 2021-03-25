import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store/store";
import { putUserPicture } from "../fetchRequests";
import { Link } from "react-router-dom";

// import {
//   getUserProfile,
//   patchUserProfile,
//   putUserPicture,
// } from "../fetchRequests";
// import { Link } from "react-router-dom";

function UserUpdate() {
  const authUser = useStore((state) => state.user);
  //   const token = useStore((state) => state.user.token);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    displayName: "",
    about: "",
  });
  const [newPicture, setNewPicture] = useState({});

  useEffect(() => {
    fetch("https://kwitter-api-b.herokuapp.com/users/" + authUser.username)
      //  .then((response) => response.json())
      //  .then((response) => setUserData(response))

      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp.user));
  }, [authUser]);

  //   const [displayName, setDisplayName] = useState("");
  //   const [about, setAbout] = useState("");
  //   const [picture, setPicture] = useState({ pictureLocation: "" });
  //   useEffect(() => {
  //     // get user info
  //     getUserProfile(authUser.username)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCurrentUser(data.user);
  //         setDisplayName(data.user.displayName);
  //         setAbout(data.user.about);
  //         setPicture(
  //           `https://kwitter-api-b.herokuapp.com/users/${data.user.username}/picture`
  //         );
  //       });
  //   }, []);
  function handleSubmitUserUpdate(event) {
    event.preventDefault();
    fetchUser(
      authUser.token,
      authUser.username,
      currentUser.about,
      currentUser.displayName
    );
    // setCurrentUser({});
  }

  function fetchUser(token, username, about, displayName) {
    return fetch("https://kwitter-api-b.herokuapp.com/users/" + username, {
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

  //   useEffect(() => {
  //     if (formSubmit === true) {
  //       fetchUser(
  //         authUser.token,
  //         authUser.username,
  //         currentUser.about,
  //         currentUser.displayName
  //       );
  //     }
  //   }, [currentUser]);

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
  }
  //   useEffect(() => {
  //     if (setFormSubmit === true) {
  //     }
  //   });
  //     patchUserProfile(authUser.token, authUser.username, updatedUserInfo).then(
  //       (data) => {
  //         setCurrentUser(data.user);
  //       }
  //     );
  //   }
  //   function handleSubmitUserPhoto(event) {
  //     putUserPicture(
  //       authUser.token,
  //       authUser.username,
  //       picture
  //     ).then((response) => console.log(response));
  //   }
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
              //   onChange={(e) => setDisplayName(e.target.value)}
              value={currentUser.displayName}
              name="displayName"
              //   size="lg"
              type="text"
              onChange={handleOnChange}
              placeholder="Change Display Name"
            />
          </Form.Group>
          {/* </Form>

        <Form> */}
          <Form.Group controlId="changeAbout">
            <Form.Label>About</Form.Label>
            <Form.Control
              //   onChange={(e) => setDisplayName(e.target.value)}
              value={currentUser.about}
              name="about"
              //   size="lg"
              type="text"
              onChange={handleOnChange}
              placeholder="Change about"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update User Information
          </Button>
        </Form>

        {/* </Form> */}
      </Container>
      {/* <label>Update Picture</label> */}
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
