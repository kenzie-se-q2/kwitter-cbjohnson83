import React, { useEffect, useState } from "react";
import useNewAccountStore from "../store/useNewAccountStore";
{/* <!-- ////////////////////////////////////////////////////////////
  Creating your own store was not necessary. We had the store already
  set up for you guys.
//////////////////////////////////////////////////////////// --> */}
import { NewUserRequest } from "../fetchRequests";
import NewAccountForm from "../views/NewAccountForm";
import NewUserregistered from "../views/newUserregistered";

  {/* <!-- ////////////////////////////////////////////////////////////
    File naming conventions are important. The rest of the files in the 
    project begin with a capital letter except for this file and 
    allUsers. I will have to take off 1 point for Naming conventions.
  //////////////////////////////////////////////////////////// --> */}
const NewAccount = () => {
  const user = useNewAccountStore((state) => state.user);
  let isSubmitted = useNewAccountStore((state) => state.isSubmitted);
  const errors = useNewAccountStore((state) => state.errors);
  const [formSubmitted, setFormSubmitted] = useState(false);
  {/* <!-- ////////////////////////////////////////////////////////////
    Although interesting and important in real world applications. This is much
    more complex than this form needed to be. You only needed 3 inputs to 
    capture the username, displayName, and password. The API will check to see
    if they are correct, so there's not need to do some of the extra pieces that 
    are being done here.
  //////////////////////////////////////////////////////////// --> */}
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      console.log(user);
      NewUserRequest(user.userName, user.firstName, user.password).then((res) =>
        console.log(res.json())
      );
      setFormSubmitted(true);
    }
    return () => {
      if (Object.keys(errors).length === 0 && isSubmitted) {
        setFormSubmitted(false);
      }
    };
  }, [errors]);

  return !formSubmitted ? (
    <NewAccountForm />
  ) : (
    <NewUserregistered formSubmitted={isSubmitted} />
  );
};
export default NewAccount;
