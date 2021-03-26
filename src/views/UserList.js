import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// cont PHOTO_URL = (username) => `https://kwitter-api-b.herokuapp.com${username}`
// export const RequestUserInfo = () => {
//     const state = useSelector = ((state) => state.users)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(action.fetchUserAction())
//     }, [])
//     console.log(state.users)

//     let userImage = defaultImage
//     if (user.pictureLocation !== null) {
//         userImage = PHOTO_URL
//     }

// return (
// <Card className = "userlist" style={{width:"50rem"}} style={{ width: 240 }}
// {state.user.map((user) => {
//     let userImage = defaultImage
//     if(user.pictureLocation !== null) {
//         userImage=PHOTO_URL(user.pictureLocation)
//     }
//     return (
//         <ListGroup>
//             <p>
//                 <ListGroupItem className="username">
//                     <Card.Title>{user.username}</Card.Title>
//                 </ListGroupItem>
//                 {/* <ListGroupItem className="userImage"><img alt="Profile" src={userImage} /> */}
//             </p>
//         </ListGroup>
//     )
// })}
// >
//     <Card.Meta title={user.username} description={user.displayName} />
//     </Card>
// )
// }

// export default RequestUserInfo

import { useHistory } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
// import { useStore } from "../store";

function UserCard() {
  const history = useHistory();
  // const user = useStore((state) => state.user);

  return (
    <Card style={{ width: "18 rem" }}>
      <Card.Body>
        <Card.Title>{user.username}</Card.Title>
        <Card.Text>{user.displayName}</Card.Text>
        <Button
          onClick={() => history.push(`/users/${user.username}`)}
          variant="primary"
        >
          See user
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
