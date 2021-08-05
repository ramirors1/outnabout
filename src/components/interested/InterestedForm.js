import React, { useContext, useState } from "react"
import { InterestedContext } from "./InterestedProvider"
// import "./Event.css"
import { useHistory } from 'react-router-dom';

export const InterestedForm = ({event}) => {
  const { addInterested } = useContext(InterestedContext)
  const history = useHistory()
  const currentUserId = parseInt(localStorage.getItem("Outnabout_user"))
  const handleInterested = () => {
debugger    
  const interest = {
    eventId: event.id,
    userId: currentUserId
  }
    addInterested(interest)
      .then(() => {
        history.push("/events")
       

      })}
            

          // { interested.userId === currentUser ?   //If this condition is true, event will display in Interested tab//
                   
  return (
    <>
    {/* <button onClick={handleInterested}>
    Add to Interested
    </button>  */}
    </>                  
  
  )
}  
