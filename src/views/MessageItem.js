//import React, { forwardRef } from "react"
//import "./assets/index.css";
import React from 'react'
import { Avatar } from "@material-ui/core";



//post that will appear in messageboard
const MessageItem = (
    ({ userName, text, userImage, image})=>{
        return (
            <div className="messagePostBody">
                <div className="messagePostHeader">
                <div className="messageBoardAvatar">
                    <Avatar/>
                </div>
                    <div className="messagePostHeaderText">
                        <span>
                            <h2>{"Ursuela"}</h2>
                        </span>
                    </div>
                    <img src={" "}/>
                    <p>{Text}</p>
                </div>
                <div className="messagePostFooter">
                    <button>Like</button>
                    
                </div>
            </div>
        )
    }
)

export default MessageItem