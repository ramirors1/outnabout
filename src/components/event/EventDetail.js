import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { CommentCard } from "./comments/CoomentCard";


export const EventDetail = () => {
  const { getEventById } = useContext(EventContext)

	      const [event, setEvent] = useState({})
        const history = useHistory()
        const { deleteEvent } = useContext(EventContext)

	      const {eventId} = useParams();
        const currentUser = parseInt(localStorage.getItem("Outnabout_user"));

        const handleDelete = () => {
          deleteEvent(event.id)
            .then(() => {
              history.push("/events")
            })
        
        // const handleComment = () => {
        //   commentEvent(event.id)
        //     .then(() => {
        //       history.push("/events")
        // })
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
        
        { event.userId === currentUser ?(   //If this condition is true, then delete button will be displayed for current user//
        <>
        {/* <button onClick={handleComment}>
          Add Comment
          </button> */}
                
        <button onClick={handleDelete}>
          Delete Event
          </button>
         </>
        ) : ( // else if this condition is not true, then delete button will not be displayed for current user//
          <> 
          </>
        
        )}
          <CommentCard event={event}></CommentCard>      
    </section> 
    
// )} 


  // return (
  //   <section className="event">
  //     <h3 className="event__title">{event.title}</h3>
  //     <div className="event__city">{event.city}</div>
  //     <div className="event__date">{event.date}</div>
  //     <div className="event__user">{event.user}</div>
  //     <div className="event__comment">{event.commnet}</div>
  //   </section>
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
//   }