import React, { useContext, useEffect } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { MessageForm } from "./MessageForm"
import "./Message.css"

export const MessageList = () => {
    const { messages, getMessages } = useContext(MessageContext)

    useEffect(() => {
        getMessages()
    }, [])

    const currentUserId = parseInt(sessionStorage.getItem("Outnabout_user"))

    const filteredMessages = messages.filter(message => {
        return message.recipientId === currentUserId || message.recipientId === 0 || message.userId === currentUserId
    })

    return (
        <>
        <div className="message__head">
            <h2>Messages</h2>
        </div>
            <div className="messages">
                {
                    filteredMessages.map(message => {
                        return <MessageCard key={message.id} message={message} />
                    })
                }
            </div>
            <MessageForm />
        </>
    )
}