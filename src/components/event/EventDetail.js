import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { InterestedForm } from "../interested/InterestedForm";
import { addInterested, InterestedContext } from "../interested/InterestedProvider"

export const EventDetail = () => {
  const { getEventById } = useContext(EventContext) //useContext allows the passing of data to children elements//
  const { addInterested } = useContext(InterestedContext)

	      const [event, setEvent] = useState({})
        const history = useHistory() //useHistory lets you access the history instance used by React Router.//
        const { deleteEvent } = useContext(EventContext)

	      const {eventId} = useParams();  //useParams hooks let you access the parameters of the current route//
        const currentUser = parseInt(localStorage.getItem("Outnabout_user"));  //parseInt() function parses a string argument and returns an integer//

        const handleDelete = () => {
          deleteEvent(event.id)
            .then(() => {
              history.push("/events")
            })
            }      
            

  useEffect(() => {
    console.log("useEffect", eventId)
    getEventById(eventId)
    .then((response) => {
      setEvent(response)
    })
  }, [])

return ( 
  
    <section className="event">
        <h3 className="events">
          <a href={event.url}>
            { event.title }
          </a>
        </h3>
        <div className="event__date">{event.date }</div>
        <div>Posted by: {event.user?.name}</div>
        <div>Comment: {event.comment}</div>
        
        {/* <div className="event__timestamp">{event.timestamp }</div>      */}
        {/* <InterestedForm event={event}/> */}

        { event.userId === currentUser ?(   //If this condition is true, then delete button will be displayed for current user//
        <>
        <button onClick={handleDelete}>
          Delete Event
          </button>
          {/* <button onClick={like}>Add to Interested</button> */}
         </>
        ) : ( // else if this condition is not true, then delete button will not be displayed for current user//
          <> 
          </>
        
        )}
          {/* <CommentCard event={event}></CommentCard>       */}
    </section> 
    
  )
}
