// TODO: Create a Profile to display the current users information
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../store/store";
// import { getUserProfile } from "../fetchRequests";
import { getUserPhoto } from "../fetchRequests";
// import UserUpdate from "./UserUpdate";
import { Link } from "react-router-dom";

function Profile() {
  const authUser = useStore((state) => state.user);

  // return <div>{authUser.username}</div>;
  const [currentUser, setCurrentUser] = useState({
    username: "",
    displayName: "",
    about: "",
  });

  // const [displayName, setDisplayName] = useState();
  // const [about, setAbout] = useState("");
  //   const [picture, setPicture] = useState({});

  useEffect(() => {
    fetch("https://kwitter-api-b.herokuapp.com/users/" + authUser.username)
      //  .then((response) => response.json())
      //  .then((response) => setUserData(response))

      .then((resp) => resp.json())
      .then((resp) => setCurrentUser(resp.user));
  }, [authUser]);

  // console.log(currentUser);
  //    getUserProfile(currentUser.username);

  //   useEffect(() => {
  //     getUserProfile(authUser.username)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // setPicture(data.user.pictureLocation);
  //         // console.log(data);
  //         // console.log(data.user);
  //         // console.log(data.user.displayName);
  //         // console.log(data.user.about);
  //         // console.log(data.user.pictureLocation);

  //         setCurrentUser({ username: data.user.username });
  //         setDisplayName(data.user.displayName);
  //         setAbout(data.user.about);
  //         setPicture(data.user.pictureLocation);
  //       });
  //   }, []);

  //   // function handleUserUpdate()

  return (
    <>
      {/* <div>{currentUser.displayName}</div> */}
      {/* //     <Card style={{ width: "18 rem" }}>
    //       <Card.Img variant="top" src={getUserPhoto} /> */}
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

      {/* <img src={currentUser.pictureLocation || defaultPictureLocation} /> */}
    </>
  );
}

export default Profile;
