import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeleteuserRequest } from "../fetchRequests";
import { useStore } from "../store/store";

const DeleteUser = () => {
  const currentUser = useStore((state) => state.user);
  //const userToken = useStore(state =>state.token)
  const [deleteUser, setDeleteUser] = useState(false);
  const handleOnClick = () => {
    setDeleteUser(true);
    DeleteuserRequest(currentUser.token, currentUser.username).then((res) =>
      console.log(res)
    );
  };
  useEffect(() => {
    if (deleteUser === true) {
      alert("User Deletion Successful");
      window.location.reload(true);
    }
    return () => {
      if (deleteUser === false) {
        window.location.reload(false);
      }
    };
  }, [deleteUser]);
  return (
    <div>
      <Link to="/">
        <button onClick={handleOnClick}>Delete Profile</button>
      </Link>
    </div>
  );
};

export default DeleteUser;
