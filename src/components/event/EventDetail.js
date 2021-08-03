import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams } from "react-router-dom"

export const EventDetail = () => {
  const { getEventById } = useContext(EventContext)

	const [event, setEvent] = useState({})

	const {eventId} = useParams();

  useEffect(() => {
    console.log("useEffect", eventId)
    getEventById(eventId)
    .then((response) => {
      setEvent(response)
    })
  }, [])

  return (
    <section className="event">
      <h3 className="event__name">{event.name}</h3>
      <div className="event__city">{event.city}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="event__location">Location: {event.location?.name}</div>
    </section>
  )
}

// import React, { useContext, useEffect, useState } from "react"
// import { EventContext } from "./EventProvider"
// import "./Event.css"
// import { useParams } from "react-router-dom"

// export const EventDetail = () => {
//   const { getEventById } = useContext(EventContext)

// 	      const [event, setEvent] = useState({})

// 	      const {eventId} = useParams();

//   useEffect(() => {
//     console.log("useEffect", eventId)
//     getEventById(eventId)
//     .then((response) => {
//       setEvent(response)
//     })
//   }, [])

//   return (
//     <section className="event">
//       <h3 className="event__title">{event.title}</h3>
//       <div className="event__city">{event.city}</div>
//       <div className="event__date">{event.date}</div>
//       <div className="event__comment">{event.commnet}</div>
//     </section>
//   )
// }