import React, { useContext } from "react"

import "./Event.css"
import { Link } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { useHistory } from "react-router-dom"
import userEvent from "@testing-library/user-event"

export const EventCard = ({ event }) =>{
  const { deleteEvent } = useContext(EventContext)
  const history = useHistory()
  const handleRelease = () => {
  deleteEvent(event.id)
    .then(() => {
      history.push("/events")
})
}

return ( 
  
    <section className="event">
        <h3 className="events">
          <a href={event.url}>
            { event.title }
          </a>
        </h3>
        <div className="event__date">{event.date }</div>
        <div>Posted by: {event.user.name}</div>
        {/* <div className="event__timestamp">{event.timestamp }</div>      */}
        <button onClick={handleRelease}>Delete Event</button>
    </section>
    
)}