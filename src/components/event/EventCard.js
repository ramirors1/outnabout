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



// import React, { useContext } from "react"
// import "./Event.css"
// // import { Link } from "react-router-dom"
// import { EventContext } from "./EventProvider"
// import { useHistory } from "react-router-dom"
// // import userEvent from "@testing-library/user-event"

// export const EventCard = ({ event }) =>{
//   const { deleteEvent } = useContext(EventContext)
//   const history = useHistory()
//   const currentUser = parseInt(localStorage.getItem("Outnabout_user"));

  
//   const handleDelete = () => {
//   deleteEvent(event.id)
//     .then(() => {
//       history.push("/events")
// })
// }

// return ( 
  
//     <section className="event">
//         <h3 className="events">
//           <a href={event.url}>
//             { event.title }
//           </a>
//         </h3>
//         <div className="event__date">{event.date }</div>
//         <div>Posted by: {event.user?.name}</div>
//         <div>Comment: {event.comment}</div>
//         {/* <div className="event__timestamp">{event.timestamp }</div>      */}
        
//         { event.userId === currentUser ?(   //If this condition is true, then delete button will be displayed for current user//
//         <>
//         <button onClick={handleDelete}>
//           Delete Event
//           </button>
//          </>
//         ) : ( // else if this condition is not true, then delete button will not be displayed for current user//
//           <> 
//           </>
        
//         )}
                
//     </section> 
    
// )} 
