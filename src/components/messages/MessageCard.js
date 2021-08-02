import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import { UserContext } from "../users/UserProvider"
import "./Message.css"

export const MessageCard = ({ message }) =>{
  const { deleteMessage } = useContext(MessageContext)
  const history = useHistory()
  
  const handleDelete = () => {
  deleteMessage(message.id)
    .then(() => {
      history.push("messages")
})
}

return ( 
  
    <section className="message">
        <h3 className="messages">
        </h3>
        <div className="message__date">{message.date }</div>
        <div>Posted by: {message.user?.name}</div>
        {/* <div className="message__timestamp">{message.timestamp }</div>   */}
        <button onClick={handleDelete}>
          Delete Message
          </button>
    </section> 
    
)} 


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