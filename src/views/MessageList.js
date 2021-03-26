import React, { useState, useEffect } from "react";
import { GETMESSAGES, POSTMESSAGES, useStore } from "../store/store";
import Menu from "../components/Menu";
import MessageItem from "../components/MessageItem";
import { messageRequest, postMessageRequest } from "../fetchRequests";

// const tableStyle = {
//   table: {
//     textAlign: "center",
//     fontFamily: "sans-serif",
//     borderCollapse: "collapse",
//     width: "85%",
//   },
//   tr: { color: "purple" },
//   trInfo: { color: "black" },
//   td: { border: "1px solid #ddd", padding: "8px" },
// };

export default function MessageList() {
  const { dispatch, messages, user } = useStore((state) => state);
  const [userMessages, setUserMessages] = useState("");

  useEffect(() => {
    messageRequest().then((data) =>
      dispatch({ type: GETMESSAGES, payload: data.messages })
    );
  }, [dispatch]);

  function submitHandler(e) {
    postMessageRequest(userMessages, user.token).then(() => {
      dispatch({ type: POSTMESSAGES });
      messageRequest().then((data) =>
        dispatch({ type: GETMESSAGES, payload: data.messages })
      );
    });
  }

  // function handleDeleteUserMessage(e) {
  //   deleteUserMessage(userMessages, user.token).then(() => {
  //     dispatch({ type: DELETEMESSAGE });
  //     messageRequest().then((data) =>
  //       dispatch({ type: GETMESSAGES, payload: data.messages })
  //   deleteUser();
  // }

  return (
    <>
      <Menu />
      <input
        type="text"
        onChange={(e) => setUserMessages(e.target.value)}
        value={userMessages}
        placeholder="Type your message"
      />
      <button onClick={submitHandler}>Post Message</button>
      <h1>Message List</h1>
      {messages.map((message) => {
        return <MessageItem {...message} />;
      })}
    </>
  );
}
