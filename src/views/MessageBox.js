import { Avatar , Button } from "@material-ui/core";
import React from "react";
import {useState} from "react";
//import {PostAddIcon} from '@material-ui/icons/PostAdd';
//import MessageItem from "../components/MessageItem";
import "./MessageBox.css";
//import Profile from "./view/profile.js"

function MessageBox() {

/*const [userMessage, setUserMessage] = useState(" ");
const [userPostImage, setUserPostImage] = useState(" ");

function UserInfo(event) {
  updateUserMessage(event.target.value)

}
 function EnterPost(event) {

  if (event.key === "Left button clicked") {
  }
}
}
;

useEffect(()=>{
  window.addEventListener("Leftclick", handleKeyDown);
*/
    return (
        <div className="messageBox">
          <form>
            <div className="messageBoxInput"> 
              <Avatar src=" "/>
              <input type="text" placeholder="What's on your Mindz?"/>
        </div>
        <div className="messageBoxImage">
        <input placeholder="Do you want to attach a picture?" type="text"/>
        </div>
        <Button className="messageBoxButton">Post</Button>
      
      </form>
      
    </div>
    )
}
//)    
export default MessageBox

//display text box of where user can type in message 
/*function MessageBox() {
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
      <h1> Mindz</h1>
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

export default MessageBox;*/