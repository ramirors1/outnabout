import React, { useContext, useState } from "react"
import { InterestedContext } from "./InterestedProvider"
// import "./Event.css"
import { useHistory } from 'react-router-dom';

export const InterestedForm = (event, user) => {
  const { interested, addInterested } = useContext(InterestedContext)
  const history = useHistory()
  const currentUserId = parseInt(localStorage.getItem("Outnabout_user"))
  const handleInterested = () => {
  const interest = {eventId:event.id, userId:currentUserId, interestedId:interested.id}
    addInterested(interest)
      .then(() => {
        history.push("/events")
        history.push("/interested")
       

      })}
            

          // { interested.userId === currentUser ?   //If this condition is true, event will display in Interested tab//
                   
  return (
    <>
    <button onClick={handleInterested}>
    Add to Interested
    </button> 
    </>                  
  
  )
}  
