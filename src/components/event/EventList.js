//Displays items in main events page//
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {

    const { events, getEvents } = useContext(EventContext)
    // const [ filteredEvents ] = useState([])
    const history = useHistory()

    // console.log(filteredEvents)

    // Initialization effect hook -> Go get event data
    useEffect(()=>{
        getEvents()
    }, [])

    return (
      <>
        <h1>Events</h1>

        <button onClick={() => history.push("/events/create")}>
          Add Event
        </button>
        <div className="events">
          
          {events.map(event => {
              return <EventCard key={event.id} event={event} />
               
            })
          }
        </div>
      </>
    )
}

// import React, { useContext, useEffect,useState } from "react"
// import { useHistory } from 'react-router-dom';
// import { EventContext } from "./EventProvider"
// import { EventCard } from "./EventCard"
// import "./Event.css"

// export const EventList = () => {

//     const { events, getEvents } = useContext(EventContext)
//     const [ filteredEvents ] = useState([])
//     const history = useHistory()

//     console.log(filteredEvents)

//     // Initialization effect hook -> Go get article data
//     useEffect(()=>{
//         getEvents()
//     }, [])

//     return (
//       <>
//         <h1>Events</h1>

//         <button onClick={() => history.push("/events/create")}>
//           Add Event
//         </button>
//         <div className="events">
          
//           {events.map(event => {
//               return <EventCard key={event.id} event={event} />
               
//             })
//           }
//         </div>
//       </>
//     )
// }