//User posting their message to the webpage (Tweeter box)


import React from "react"
//import "./assets/index.css";
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';

function MessageItem() {
    const [userPost, setUserPost] = useState(" ");
    const [userPostImage, setUserPostImage] = useState (" ");

    const sendUserPost = (event)=> {
        event.default();

        MessageItem.add({
            userName:{ },
            text: { },
            userProfile: { },
        })
        setUserPost("");
        setUserPostImage;
    }
            /*function Example() {
            // Declare a new state variable, which we'll call "count"
            const [count, setCount] = useState(0);*/
    return (
        <div className="messageItem">
            <form>
                <div className="messageItem_input">
                {/* are we importing image from profile page?*/}
                <input placeholder="What's on your Mindz?" type="text" />
                </div>
                <Button>Post</Button>
                <Button>Cancel</Button>
            </form>
        </div>
        //need to include profile picture 
        // include option to post image  
        //see where you can import button designs
    )
}

export default MessageItem