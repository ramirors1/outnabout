import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams, useHistory } from "react-router-dom"

export const EventDetail = () => {
  const { getEventById, deleteEvent } = useContext(EventContext)

	const [event, setEvent] = useState({})

	const {eventId} = useParams();
  const history = useHistory()

  useEffect(() => {
    console.log("useEffect", eventId)
    getEventById(eventId)
    .then((response) => {
      setEvent(response)
    })
  }, [])

  return (
    <section className="event">
      <h3 className="event__title">{event.title}</h3>
      <div className="event__city">{event.city}</div>
      <div className="event__date">{event.date}</div>
    </section>
  )
}