import React, { useEffect, useState } from "react";
import useNewAccountStore from "../store/useNewAccountStore";
import { NewUserRequest } from "../fetchRequests";
import NewAccountForm from "../views/NewAccountForm";
import NewUserregistered from "../views/newUserregistered";

const NewAccount = () => {
  const user = useNewAccountStore((state) => state.user);
  let isSubmitted = useNewAccountStore((state) => state.isSubmitted);
  const errors = useNewAccountStore((state) => state.errors);
  const [formSubmitted, setFormSubmitted] = useState(false);
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
