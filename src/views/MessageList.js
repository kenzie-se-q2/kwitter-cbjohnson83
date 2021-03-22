import React from "react"
import "./index.css";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PublishIcon from "@material-ui/icons/Publish";
import "./profile.js"
import "./messageItem.js"



let Post = messageBoard(
  ({ displayName, username, text, image}) => {
    return (

        <div className="message__body">
          <div className="message__header">
            <div className="message__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
    );
  }
);

export default messageBoard;