import React, { useEffect, useContext } from "react";
import { MessageCard } from "./MessageCard";
import { MessageContext } from "./MessageProvider";
import { useHistory } from "react-router";
import "./Message.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export const MessageList = () => {
  const { messages, getMessages } = useContext(MessageContext);
  const history = useHistory();

  const sortedMessages = messages.sort((a, b) => {
    return parseInt(b.id) - parseInt(a.id);
  });

  useEffect(() => {
    console.log("useEffect: getMessages");
    getMessages();
  }, []);

  const handleSendNewMessage = () => {
    history.push("./messages/new");
  };

  return (
    <>
      {console.log("MessageList - Render: messages", messages)}
      <button onClick={handleSendNewMessage}>Send New Message</button>
      {sortedMessages.map((message) => {
        return <MessageCard key={message.id} message={message} />;
      })}
    </>
  );
};

// import React, { useContext, useEffect } from "react"
// import { MessageContext } from "./MessageProvider"
// import { MessageCard } from "./MessageCard"
// import { MessageForm } from "./MessageForm"
// import "./Message.css"

// export const MessageList = () => {
//     const { messages, getMessages } = useContext(MessageContext)

//     useEffect(() => {
//         getMessages()
//     }, [])

//     const currentUserId = parseInt(sessionStorage.getItem("Outnabout_user"))

//     const filteredMessages = messages.filter(message => {
//         return message.recipientId === currentUserId || message.recipientId === 0 || message.userId === currentUserId
//     })

//     return (
//         <>
//         <div className="message__head">
//             <h2>Messages</h2>
//         </div>
//             <div className="messages">
//                 {
//                     filteredMessages.map(message => {
//                         return <MessageCard key={message.id} message={message} />
//                     })
//                 }
//             </div>
//             <MessageForm />
//         </>
//     )
// }