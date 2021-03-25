import React from "react";
import "./MessageList.css"
import MessageBox from "./MessageBox.js"
import MessageItem from "./MessageItem.js"



//MessageBoard containing MessageBox and MessageItems 
function MessageList() {
  return (
    <div className="MessageList">
      <div className="MessageHeader">
        <h1>Mindz Message Board</h1>
    </div>

    {/* Message Box*/}
    <MessageBox/>
    {/* MessageItem (post)*/}
    <MessageItem/>
    {/* MessageList (board)(all together) */}

  </div>
  )

}
export default MessageList

