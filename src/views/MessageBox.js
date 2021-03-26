import { Avatar , Button } from "@material-ui/core";
//import {useEffect} from "react";
import {useState} from "react";
//import {PostAddIcon} from '@material-ui/icons/PostAdd';
//import MessageItem from "../components/MessageItem";
import "./MessageBox.css";
//import Profile from "./view/profile.js";
import {useStore} from "../store/store";
import { FlashOffOutlined } from "@material-ui/icons";
import { createMessgeRequest } from "../fetchRequests";
//import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

function MessageBox() {
  const user = useStore((state)=>state.user)
  const[message,setMessage] = useState("")
  const [text, setText] = useState({text: " "})
  const[IsPosted, setIsPosted] = useState(FlashOffOutlined)
  const handleOnChange=(event)=>{
    setMessage(...message ,[event.target.value])

  }
  const handleSubmit = (event)=>{
    event.preventDefault()
    setIsPosted(true)
    setText({ text : message })
    createMessgeRequest(user.token, text)
    .then((response)=> console.log(response))
  }
   // useEffect(()=> {
      //if(IsPosted===true) {
        //createMessgeRequest(user.token, message)
        //.then((response)=> console.log(response))
      //}
   // },[message])

    return (
        <div className="messageBox">
          <form onSubmit={handleSubmit}>
            <div className="messageBoxInput"> 
              <div className="userName">
                {user.username}
                <div>{message}</div>
              </div>
              <Avatar src=" " alt =" "/>
              <input onChange ={handleOnChange} name= "message" type="text" placeholder="What's on your Mindz?"/>
        </div>
        <Button type="submit" className="postButton">Post</Button>
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

    const MessagePost = onePost({
      /*userName.add(),
      userText.add(),
      userImage.add(),*/
    //})
    /*setUserMessage(" ");
    setUserPostImage(" ");
  //}
  /*return (
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