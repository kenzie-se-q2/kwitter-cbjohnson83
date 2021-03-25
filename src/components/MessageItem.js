//import React, { forwardRef } from "react"
//import "./assets/index.css";


//post that will appear in messageboard
const MessageItem = (
    ({ userName, text, userImage, image})=>{
        return (
            <div className="messagePostBody">
                <div className="messagePostHeader">
                    <div className="messagePostHeaderText">
                        <span>
                            <h2>{userName}</h2>
                        </span>
                    </div>
                    <p>{text}</p>
                </div>
                <div className="messagePostFooter">
                    <button>Post</button>
                    {/*need to add function to button*/}
                </div>
            </div>
        )
    }
)

export default MessageItem