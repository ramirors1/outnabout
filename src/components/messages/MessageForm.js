import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
import { FriendContext } from "../friends/FriendProvider"

export const MessageForm = () => {
    const { addMessage, getMessageById, updateMessage } = useContext(MessageContext)
    const { users, getUsers } = useContext(FriendContext)

    const [message, setMessage] = useState({
            textArea: "",
            date: "",
            timestamp: Date.now(),
    });
    const history = useHistory()



    //for edit, hold on to state of message in this view
    // const [message, setMessage] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {messageId} = useParams();
	// const history = useHistory();

    
    useEffect(() => {
                if (messageId) {
                    getMessageById(messageId).then(message => {
                        setMessage(message)
                        setIsLoading(false)
                    })
                } else {
                    setIsLoading(false)
                }
            }, [])

    // const handleControlledInputChange = (event) => {
    //     const newMessage = { ...message }
    //     newMessage[event.target.id] = event.target.value
    //     setMessage(newMessage)
    // }

    const handleControlledInputChange = (controlEvent) => {
        const newMessage = { ...message }
        let selectedVal = controlEvent.target.value
        
        if (controlEvent.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
        }
        // if (controlEvent.target.id == 0){
        // selectedVal = 
        // }
        newMessage[controlEvent.target.id] = selectedVal
        setMessage(newMessage)
    }




    // const handleClickSaveMessage = (event) => {
    //     event.preventDefault()

    //     // const userId = parseInt(message.userId)

    //     const newMessage = {
    //         textArea: message.textArea,
    //         date: message.date,
    //         userId: parseInt(sessionStorage.getItem("nutshell_user")),
    //         timeStamp: Date.now(message.timeStamp),
    //     }
    //     addMessage(newMessage).then(() => history.push("/messages"))
        
    // }



    const handleSaveMessage = () => {
        // if (parseInt(animal.locationId) === 0) {
        //     window.alert("Please select a location")
        // } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (messageId) {
            //PUT - update
            updateMessage({
                id: message.id,
                textArea: message.textArea,
                date: message.date,
                userId: parseInt(sessionStorage.getItem("nutshell_user")),
                timeStamp: Date.now(message.timeStamp),
            })
            .then(() => history.push("/messages"))
        } else {
            //POST - add
            addMessage({
                textArea: message.textArea,
                date: message.date,
                userId: parseInt(sessionStorage.getItem("nutshell_user")),
                timeStamp: Date.now(message.timeStamp),
            })
            .then(() => history.push("/messages"))
        }
        
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        // getCustomers().then(getLocations).then(() => {
        if (messageId){
            getMessageById(messageId)
            .then(message => {
                setMessage(message)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
        
    }, [])

    
    return(
        <form className="messageForm">
        <h2 className="messageForm_header"> New Message</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="textArea">Write your message here:</label>
            <input
                type="text"
                id="textArea"
                required
                autoFocus
                className="form-control"
                placeholder="Message TextArea"
                value={message.textArea}
                onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="date">message date</label>
                <input type="date" 
                id="date" 
                required autoFocus className="form-control" 
                placeholder="Message Date" 
                value={message.date} 
                onChange={handleControlledInputChange} 
                />
            </div>
        </fieldset>
        {/* <fieldset>
            <div className="form-group">
                <label htmlFor="date">message sent to</label>
                <select
                    id="user" 
                    required autoFocus className="form-control" 
                    placeholder="Message receiver" 
                    value={message.userId} 
                    onChange={handleControlledInputChange} 
                >
                    <option value="0"> Select User</option>
                    {users.map((l) => (
                    <option key={l.id} value={l.id}>
                        {l.name}
                    </option>
                    ))}
                </select>
            </div>
        </fieldset> */}
        <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveMessage()
        }}>
        {messageId ? "Save Message" : "Add Message" }</button>
        </form>
    )



}

// import React, { useContext, useState } from "react"
// import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../users/UserProvider"
// import "./Message.css"
// import { useHistory, useParams } from 'react-router-dom';

// export const MessageForm = () => {
//   const { addMessage } = useContext(MessageContext)
//   const { users, getUsers } = useContext(UserContext)
//   const history = useHistory()
//   const { messageId } = useParams()
//   const [isLoading, setIsLoading] = useState(true)

//   const [message, setMessage] = useState({
//     title: "",
//     date: "",
//     userId: 0
//   })

//   const handleControlledInputChange = (e) => {
//     const newMessage = { ...message }
//     newMessage[e.target.id] = e.target.value
//     console.log(e.target.value)
   
//     setMessage(newMessage)
//   }

//   const handleClickSaveMessage = (e) => {
//     e.preventDefault() //Prevents the browser from submitting the form

//     const currentUserId = parseInt(localStorage.getItem("Outnabout_user"))

//       const newMessage = {
//         body: message.body,
//         userId: currentUserId,
//         recipientId: message.recipientId
//       }
//       addMessage(newMessage)
//       .then(() => history.push("messages"))
//     }
  
//   return (
//     <form className="messageForm">
//       <h2 className="messageForm__title">New Message</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="title">Message body:</label>
//           <input type="text" id="title" required autoFocus className="form-control" placeholder="Message body" value={message.body} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="date">Message date:</label>
//           <input type="date" id="date" required autoFocus className="form-control" placeholder="Event date" value={message.date} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="url">Message url:</label>
//           <input type="text" id="url" required autoFocus className="form-control" placeholder="Event url" value={message.url} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>

//       <button className="btn btn-primary" onClick={handleClickSaveMessage}>
//         Send Message 
//           </button>
                      
//     </form>
//   )
// }  

// import React, { useContext, useEffect, useState } from "react"
// import { useHistory, useParams } from "react-router"
// import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../users/UserProvider"
// import "./Message.css"

// export const MessageForm = () => {
//     const { addMessage, updateMessage, getMessageById } = useContext(MessageContext)
//     const { users, getUsers } = useContext(UserContext)
//     const history = useHistory()
//     const { messageId } = useParams()
//     const [isLoading, setIsLoading] = useState(true)

//     useEffect(() => {
//         if (messageId) {
//             getMessageById(messageId).then(event => {
//                 setMessage(event)
//                 setIsLoading(false)
//             })
//         } else {
//             setIsLoading(false)
//         }
//     }, [])

//     const [message, setMessage] = useState({
//         body: "",
//         userId: 0,
//         recipientId: 0
//     })

//     const [privateDialog, setPrivateDialog] = useState(false)
//     const [recipientId, setRecipientId] = useState(0)

//     const recipientName = users.find(user => user.id === recipientId)?.name

//     const placeholderString = recipientId ? `Private message to ${recipientName}` : "Type '@' to make message private"

//     const handleControlledInputChange = event => {
//         const newMessage = { ...message }
//         newMessage[event.target.id] = event.target.value

//         if (newMessage.body === "@") {
//             setPrivateDialog(true)
//         }

//         setMessage(newMessage)
//     }

//     const handleDialogClose = () => {
//         setPrivateDialog(false)

//         setMessage({
//             body: "",
//             userId: 0,
//             recipientId: 0
//         })
//     }

//     const handleClickSendMessage = event => {
//         event.preventDefault()

//         const currentUserId = parseInt(sessionStorage.getItem("Outnabout_user"))

//         setIsLoading(true)
//         if (messageId) {
//             updateMessage({
//                 id: message.id,
//                 body: message.body,
//                 userId: currentUserId,
//                 recipientId: message.recipientId
//             }).then(() => history.push("/messages"))
//         } else {
//             const newMessage = {
//                 body: message.body,
//                 userId: currentUserId,
//                 recipientId: recipientId
//             }

//             addMessage(newMessage)
//                 .then(setRecipientId(0))
//                 .then(setMessage({
//                     body: "",
//                     userId: 0,
//                     recipientId: 0
//                 }))
//         }
//     }

//     return (
//         <>
//             <div className="main__message__form">
//                 <dialog className="privateDialog" open={privateDialog}>
//                     <div className="radio__wrapper">
//                         <div>Send to?</div>
//                         {users.map(user => {
//                             return <label className="radio-group">
//                                 <input className="radio-button" name="recipient" type="radio" value={user.id} onChange={() => setRecipientId(user.id)} />{user.name}
//                             </label>
//                         })}
//                         <label className="radio-group">
//                             <input className="radio-button" type="radio" name="recipient" value="public" onChange={() => setRecipientId(0)} />Public Message
//                         </label>
//                         <button className="dialog-button" onClick={handleDialogClose}>Close</button>
//                     </div>
//                 </dialog>
//                 <form className="messageForm">
//                     <fieldset className="message__textarea">
//                         <div className="form-group">
//                             <textarea type="text" id="body" required autoFocus className="form-control" placeholder={placeholderString} value={message.body} onChange={handleControlledInputChange} />
//                         </div>
//                     </fieldset>
//                     <button className="send__message__button" onClick={handleClickSendMessage}>
//                         {messageId ? "Update Message" : "Send Message"}
//                     </button>
//                 </form>
//             </div>
//         </>
//     )
// }