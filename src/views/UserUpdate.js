import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../store/store";
import {
  getUserProfile,
  patchUserProfile,
  putUserPicture,
} from "../fetchRequests";

function User({ match }) {
  const authUser = useStore((state) => state.user);
  const [user, setUser] = useState({});
  const [displayName, setDisplayName] = useState("");
  const [about, setAbout] = useState("");
  const [picture, setPicture] = useState({});

  useEffect(() => {
    // get user info
    getUserProfile(match.params.username).then((data) => {
      setUser(data.user);
      setDisplayName(data.user.displayName);
      setAbout(data.user.about);
    });
  }, [match]);

  function handleSubmitUserUpdate(e) {
    e.preventDefault();
    const updatedUserInfo = {
      about,
      displayName,
    };
    patchUserProfile(authUser.token, user.username, updatedUserInfo).then(
      (data) => {
        setUser(data.user);
      }
    );
  }

  function handleSubmitUserPhoto(event) {
    putUserPicture(
      authUser.token,
      authUser.username,
      picture
    ).then((response) => console.log(response));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmitUserUpdate}>
        <Form.Group controlId="loginEmail">
          <Form.Label>About Me:</Form.Label>
          <Form.Control
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            type="text"
            placeholder="Tell us about yourself..."
          />
        </Form.Group>
        <Form.Group controlId="formAbout">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            onChange={(e) => setAbout(e.target.value)}
            value={displayName}
            type="text"
            placeholder="Your real name"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <input
        type="file"
        onChange={(event) => setPicture(event.target.files[0])}
      />
      <button onClick={handleSubmitUserPhoto}>update my photo</button>
      <img src={"https://socialapp-api.herokuapp.com" + user.pictureLocation} />
    </Container>
  );
}

export default User;
