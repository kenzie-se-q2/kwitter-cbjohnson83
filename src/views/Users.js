import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { getUsers } from "../fetchRequests";

  {/* <!-- ////////////////////////////////////////////////////////////
    It's doesn't appear that this file is ever being used. Remember 
    when you finish a project to remove unused variables, unused
    imports, unused functions, and unused files.
  //////////////////////////////////////////////////////////// --> */}
function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => {
        return <UserCard user={user} key={user.username} />;
      })}
    </div>
  );
}

export default Users;
