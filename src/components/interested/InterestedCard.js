import React from "react"
import "./Event.css"
import { Link } from "react-router-dom"


export const EventCard = ({ event }) =>(
  
  <section className="event">
  <h3 className="events">  
  <Link to={`/events/detail/${event.id}`}>
            { event.title }
  </Link>
        </h3>
        <div className="event__date">{ event.date }</div>
        
    </section>
    
)       