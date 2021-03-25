import React from "react";
import {useState} from "react";
import {PostAddIcon } from '@material-ui/icons/PostAdd';
import MessageItem from "../components/MessageItem";
//import "./assets/index.css";
//import Profile from "./view/profile.js"



//display text box of where user can type in message 
function MessageBox() {
  const [userMessage, setUserMessage] = useState(" ");
  const [userPostImage, setUserPostImage] = useState(" ");

  const UserPost=(event)=>{
    event.preventDefault();

    MessageItem.add({
      userName: { },
      userText: { },
      userImage: { },
    })
    setUserMessage(" ");
    setUserPostImage(" ");
  }
  return (
    <div className="messageBox">
      <form>
        <div className="messageBoxInput">
          <input 
          onChange={(event)=>setUserMessage(event.target.value)}
          value={userMessage}
          placeholder="What's going on in that Mindz?"
          type="text"
          />
        </div>
        <input 
          onChange={(event)=>setUserPostImage(event.target.value)}
          value={userPostImage}
          placeholder="Do you want to attach a picture?"
          type="text"
          />
        <button onClick={UserPost} type="submit" className="postButton">Post</button>
      </form>
    </div>
  );
}

export default MessageBox;



