// TODO: Create a MessageList to display messages
import React from "react";
import MessageItem from "./messageItem.js";
//import css

const messageBoard = board(({ displayName, username,text, image }) => {
    return (
      <div className="feed">
        <div className="feedBody">
              <h3>
              {displayName}{" "}
              
                <span className="post__headerSpecial">
                  {/*username from profile.js*/}
                  {/* input text*/}
                  {/*image url */}
                  </span>
              </h3>
        </div>
      </div>
    );
  }); 