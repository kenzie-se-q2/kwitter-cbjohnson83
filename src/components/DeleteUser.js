import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { DeleteuserRequest, logoutRequest } from "../fetchRequests";
import { useStore } from "../store/store";

const DeleteUser = () => {
  const currentUser = useStore((state) => state.user);
  //const userToken = useStore(state =>state.token)
  const [deleteUser, setDeleteUser] = useState(false);
  const dispatch = useStore((state) => state.dispatch);

  const handleOnClick = () => {
    setDeleteUser(true);
    DeleteuserRequest(currentUser.token, currentUser.username).then((res) =>
      console.log(res)
    );
    logoutRequest(currentUser.token).then(() => dispatch({ type: "LOGOUT" }));
  };

  useEffect(() => {
    if (deleteUser === true) {
      alert("User Deletion Successful");
    }
    return () => {
      if (deleteUser === false) {
      }
    };
  }, [deleteUser]);
  return (
    <div>
      <button onClick={handleOnClick}>Delete Profile</button>
      {deleteUser && <Redirect to="/" />}
    </div>
  );
};

export default DeleteUser;
