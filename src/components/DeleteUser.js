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
    {/* <!-- ////////////////////////////////////////////////////////////
      Doing this in this order is causing a 404. Basically we're deleteing the 
      profile. After that we can't log out the use because the user no longer 
      exists. So, we could log out the user and then delete.. Or, we could
      just do the dispatch({type: "LOGOUT"}) inside of the .then() of the
      DeleteUserRequest()
    //////////////////////////////////////////////////////////// --> */}
    
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

  {/* <!-- ////////////////////////////////////////////////////////////
    I would recommend having some kind of confirmation before deleting a account.
    If a kid or cat is playing at the user's laptop we don't want to make it 
    easy for their account to be accidentally deleted.
  //////////////////////////////////////////////////////////// --> */}
  
  return (
    <div>
      <button onClick={handleOnClick}>Delete Profile</button>
      {deleteUser && <Redirect to="/" />}
    </div>
  );
};

export default DeleteUser;
