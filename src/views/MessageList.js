//displays message box with a post and cancel button
//displays messageboard of different post

import React from "react";
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
//import "./assets/index.css";
//import Profile from "./view/profile.js"
//import MessageItem from "./components/MessageItem.js"



function Post({userName, text}) {
  <div className="postBody">
    <div className="postHeader">
      <div className="postText">
        <h3>
          {userName}{" "}
        </h3>
      </div>
      <div className="postText">
        <p>{text}</p>
      </div>
      <div className="footer">
        {/* like button */}
      </div>
    </div>

  </div>
  
}

function MessageList() {
  return (
    <div className="messageBoard">
      <div>
        {/* Header */}
        <h2>Message Board of the Mindz</h2>
      </div>

    {/* Message Item*/}
    {/*<MessageItem />*/}

    {/* Message Board */}
    <Post
      username=" "
      text=" "
    />
    {/*post */}
    {/*post */}
    {/*post */}
    {/*post */}
    {/*post */}
    </div>
  );
}


export default MessageList;