import React, { useContext, useState } from "react"
import { InterestedContext } from "./InterestedProvider"
// import "./Event.css"
import { useHistory } from 'react-router-dom';

export const InterestedForm = () => {
  const { addInterested } = useContext(InterestedContext)
  const history = useHistory()

  const handleInterested = () => {
    addInterested(event.id)
      .then(() => {
        history.push("/events")
        history.push("/interested")
      })
      }      
        

          { interested.userId === currentUser ?(   //If this condition is true, event will display in Interested tab//
                   
  return (

    <button onClick={handleInterested}>
    Add to Interested
    </button> 
                      

  )
}  
