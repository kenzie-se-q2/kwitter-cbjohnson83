import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PeopList from "../components/PeopleList";
// import { getAvatarTitle } from "../user/utils/js";

function Profile({ user, followingList, followersList }) {
  return (
    <>
      <Avatar alt={user.name}>{getAvatarTitle(user.name)}</Avatar>
      <Typography variant="h5" gutterBottom>
        {user.name}
      </Typography>
      <Typography variant="h6">
        {followingList.length}
        Following
      </Typography>
      <PeopleList people={followingList} />
      <Typography variant="h6">
        {followersList.length}
        Followers
      </Typography>
      <PeopleList people={followersList} />
    </>
  );
}

// function Profile() {
//   const [details, setDetails] = useState();
//   return (
//     <div className="container">
//       <div className="row"></div>
//       <div className="col-md-3">
//         <h2 className="page-title">User Profile</h2>
//         <div className="user">
//           <div className="display-name">
//             <div className="email"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default Profile;

// renderProfile() {
//   return this.state.profile.map((profile, i) => <Profile key={profile.id} />);
// }
