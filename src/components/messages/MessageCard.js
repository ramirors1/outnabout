import React, { useContext, useEffect } from "react";
import "./Message.css";
import { FriendContext } from "../friends/FriendProvider";
// import "bootstrap/dist/css/bootstrap.min.css";
import { MessageContext } from "./MessageProvider";
import { useHistory } from "react-router";

export const MessageCard = ({ message }) => {
  
  const history = useHistory()
  const { deleteMessage } = useContext(MessageContext)
  const currentUser = parseInt(localStorage.getItem("Outnabout_user"));
  const { friends, getFriends, addFriend, deleteFriend } =
    useContext(FriendContext);

  useEffect(() => {
    getFriends();
  }, []);

  // let foundFriend = friends.find(
  //   (friend) =>
  //     currentUser === friend.currentUserId && friend.userId === message.user.id
  // );

  let isCurrentUser = null
    
  if (currentUser === message.userId){
    
      isCurrentUser = true
    }else{
      
      isCurrentUser = null
    }
  
 
  let foundFriend = friends.find((friend)=> (currentUser === friend.currentUserId && friend.userId === message.user.id) )
  
  let friendStyling = "not-friend"
 if (foundFriend) {
   friendStyling = "friend"
 } 
  const addNewFriend = () => {
    const newFriendObj = {
      currentUserId: currentUser,
      userId: message.userId,
    };

    addFriend(newFriendObj);
  };

  const unfriend = () => {
    deleteFriend(foundFriend.id);
  };

  const handleDeleteMessage = () => {
    deleteMessage(message.id)
  }

  const handleUpdateMessage = ()=> {
   
      history.push(`/messages/edit/${message.id}`)}
  
 

  return (
    <>{message.recipientId === undefined || parseInt(message.recipientId) === currentUser || message.userId === currentUser ? 
      <div className="card">
        <div className="messages card-body">
          <div className="card-sender-wrapper">
          <h3>Sender</h3>
            <img src={message.user.profile_pic} alt="" className="profilepic"></img>
            <div className="card-text" onClick={addNewFriend}>
              {message.user.name}
            </div>
            <div className="card-text">{message.user.email}</div>
            { message.user.id === currentUser ? (
              <>
              </>
            ) : (
              <>
              {foundFriend ? (
              <>
                <button className={friendStyling} onClick={unfriend}>
                  Unfriend
                </button>
              </>
            ) : (
              <>
                <button className={friendStyling} onClick={() =>
                  {window.confirm(('Continue with adding friend?'))
                  {addNewFriend()}}}>
                  Add Friend
                </button>
              </>
            )}
            </>
            )}
          {isCurrentUser? (<>
          <button key={Math.random(message.id)} onClick={handleDeleteMessage}>Delete Message</button>
          <button key={message.id} value={message.id} onClick={handleUpdateMessage}>Edit Message</button></>):(<></>)}
          </div>
          <div className="card-message-wrapper">
          {message.recipientId === undefined ? "" : "Private"}
            <h5 className="card-title">{message.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{message.message}</h6>
          </div>
          {/* <a href={article.url} class="card-link">Card link</a> */}
          {/* <a href="#" class="card-link">Posted By: {article.user.name}</a> */}
        </div>
      </div> : ""}
    </>
  );
};

// import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom"
// import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../users/UserProvider"
// import "./Message.css"

// export const MessageCard = ({ message }) =>{
//   const { deleteMessage } = useContext(MessageContext)
//   const history = useHistory()
  
//   const handleDelete = () => {
//   deleteMessage(message.id)
//     .then(() => {
//       history.push("messages")
// })
// }

// return ( 
  
//     <section className="message">
//         <h3 className="messages">
//         </h3>
//         <div className="message__date">{message.date }</div>
//         <div>Posted by: {message.user?.name}</div>
//         {/* <div className="message__timestamp">{message.timestamp }</div>   */}
//         <button onClick={handleDelete}>
//           Delete Message
//           </button>
//     </section> 
    
// )} 


// import React, { useContext, useEffect } from "react"
// import { useHistory } from "react-router-dom"
// import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../users/UserProvider"
// import "./Message.css"

// export const MessageCard = ({ message }) => {
//     const { users, getUsers } = useContext(UserContext)
//     const { removeMessage } = useContext(MessageContext)
//     const history = useHistory()

//     useEffect(() => {
//         getUsers()
//     }, [])

//     const currentUserId = parseInt(sessionStorage.getItem("Outnabout_user"))
//     const sender = users.find(user => user.id === message.userId)
//     let senderString = `${sender?.name} says`
//     if (sender?.id === currentUserId) {
//         senderString = "You say"
//     }

//     const privateMessage = message.recipientId ? "privateMessage" : ""
//     let privateString = ""
//     let privateRecipient = users.find(user => user.id === message.recipientId)
//     if (currentUserId === message.recipientId) {
//         privateString = " to you"
//     }
//     if (message.recipientId && currentUserId === message.userId) {
//         privateString = ` to ${privateRecipient?.name}`
//     }

//     let userButtons
//     if (message.userId === parseInt(sessionStorage.getItem("Outnabout_user"))) {
//         userButtons = <>
//             <button className="message__button__detail" onClick={() => history.push(`/messages/edit/${message.id}`)}>
//                 Edit
//             </button>
//             <button className="message__button__detail" onClick={() => removeMessage(message.id)}>
//                 Delete Message
//             </button>
//         </>
//     }

//     return (
//         <>
//             <div className="main__messages">
//                 <section className={`message ${privateMessage}`}>
//                     <div className="message__sender">{senderString} {privateString}:</div>
//                     <div className="message__body">{message.body}</div>
//                 </section>
//             </div>
//                 <div className="message__buttons">{userButtons}</div>
//         </>
//     )
// }