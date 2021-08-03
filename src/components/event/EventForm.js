import React, { useContext, useEffect, useState } from "react"
// import { LocationContext } from "../LocationsProvider"
import { EventContext } from "../event/EventProvider"
import { UserContext } from "../users/UserProvider"
import "./Event.css"
import { useHistory } from 'react-router-dom';

export const EventForm = () => {
  const { addEvent } = useContext(EventContext)
  // const { locations, getLocations } = useContext(LocationContext)
  const { users, getUsers } = useContext(UserContext)

  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [event, setEvent] = useState({
    name: "",
    city: "",
    customerId: 0
  });

  const history = useHistory();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getUsers()
  }, [])

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEvent = { ...event }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEvent[event.target.id] = event.target.value
    // update state
    setEvent(newEvent)
  }

  const handleClickSaveEvent = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const cityId = parseInt(event.cityId)
    const userId = parseInt(event.userId)

    if (cityId === 0 || userId === 0) {
      window.alert("Please select a city and a user")
    } else {
      //Invoke addAnimal passing the new animal object as an argument
      //Once complete, change the url and display the event list

      const newEvent = {
        name: event.name,
        cityId: cityId,
        userId: userId
      }
      addEvent(newEvent)
        .then(() => history.push("/events"))
    }
  }

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Event name:</label>
          <input type="text" id="name" required autoFocus className="form-control" placeholder="Event name" value={event.name} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Event breed:</label>
          <input type="text" id="breed" required autoFocus className="form-control" placeholder="Event breed" value={event.breed} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      {/* <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select name="locationId" id="locationId" className="form-control" value={event.locationId} onChange={handleControlledInputChange}>
            <option value="0">Select a location</option>
            {locations.map(l => (
              <option key={l.id} value={l.id}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset> */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="customerId">Customer: </label>
          <select name="customer" id="customerId" className="form-control" value={event.customerId} onChange={handleControlledInputChange}>
            <option value="0">Select a customer</option>
            {users.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEvent}>
        Save Event
          </button>
    </form>
  )
}

// import React, { useContext, useState } from "react"
// import { EventContext } from "./EventProvider"
// import "./Event.css"
// import { useHistory } from 'react-router-dom';

// export const EventForm = () => {
//   const { addEvent } = useContext(EventContext)
//   const history = useHistory()

//   const [event, setEvent] = useState({
//     title: "",
//     city: "",
//     date: "",
//     url: "",
//     comment: "",
//     userId: 0
//   })

//   //when a field changes, update state. The return will re-render and display based on the values in state
//   //Controlled component
//   const handleControlledInputChange = (e) => {
//     /* When changing a state object or array,
//     always create a copy, make changes, and then set state.*/
//     const newEvent = { ...event }
//     /* Event is an object with properties.
//     Set the property to the new value
//     using object bracket notation. */
//     newEvent[e.target.id] = e.target.value
//     console.log(e.target.value)
//     // update state
//     setEvent(newEvent)
//   }

//   const handleClickSaveEvent = (e) => {
//     e.preventDefault() //Prevents the browser from submitting the form

//     const currentUserId = parseInt(localStorage.getItem("Outnabout_user"))

//       //Invoke addEvent passing the new event object as an argument
//       //Once complete, change the url and display the article list

//       const newEvent = {
//         title: event.title,
//         city: event.city,
//         date: event.date,
//         url: event.url,
//         comment: event.comment,
//         userId: currentUserId
//       }
//       addEvent(newEvent)
//       .then(() => history.push("/"))
//     }
  
//   return (
//     <form className="eventForm">
//       <h2 className="eventForm__title">New Event</h2>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="title">Event title:</label>
//           <input type="text" id="title" required autoFocus className="form-control" placeholder="Event title" value={event.title} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="city">Event city:</label>
//           <input type="text" id="city" required autoFocus className="form-control" placeholder="Event city" value={event.city} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="date">Event date:</label>
//           <input type="date" id="date" required autoFocus className="form-control" placeholder="Event date" value={event.date} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="url">Event url:</label>
//           <input type="text" id="url" required autoFocus className="form-control" placeholder="Event url" value={event.url} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>
//       <fieldset>
//         <div className="form-group">
//           <label htmlFor="url">Comment:</label>
//           <input type="text" id="comment" required autoFocus className="form-control" placeholder="Comment" value={event.comment} onChange={handleControlledInputChange} />
//         </div>
//       </fieldset>

//       <button className="btn btn-primary" onClick={handleClickSaveEvent}>
//         Save Event 
//           </button>
                      
//     </form>
//   )
// }  

// import { addNewEvent } from "/scripts/data/provider.js"

// const applicationElement = document.querySelector(".outnabout")


// //click event and function for displaying initially hidden new post form

// applicationElement.addEventListener("click", (event) => {
//    if (event.target.id === "miniMode") {
//       showEventDiv()
//    } 
// })

// const showEventDiv = () => {
//    document.getElementById("miniMode").style.display = "none"
//    document.getElementById("newEvent").style.display = "block"
// }


// //click event and function for hiding post form

// applicationElement.addEventListener("click", (event) => {
//    if (event.target.id === "newEvent__cancel") {
//       showMiniMode()
//    }
// })

// const showMiniMode = () => {
//    document.getElementById("miniMode").style.display = "block"
//    document.getElementById("newEvent").style.display = "none"
// }


// //click event for posting new post to api

// applicationElement.addEventListener(
//     "click", event => {
//         if (event.target.id === "newEvent__submit") {
//             const eventTitle = document.getElementById("eventTitle").value
//             const eventURL = document.getElementById("eventURL").value
//             const eventDescription = document.getElementById("eventDescription").value
//             const eventUserId = parseInt(localStorage.getItem('gg_user'))

//             const eventObj = {
//                userId: eventUserId,
//                title: eventTitle,
//                url: eventURL,
//                description: eventDescription,
//                timestamp: Date.now()
//             }

//             addNewEvent(eventObj)

//             console.log(`New event sent to api: ${eventObj}`)
//         }
//     }
// )


// //build the html for displaying the new event form

// export const addEventForm = () => {

//    let addEventHTML = `<div id="addEvent">`

//    addEventHTML += `
//       <div class="miniMode" id="miniMode">
//          Have an event to post?
//       </div>
//       <div id="newEvent" class="newEvent">
//          <div>
//             <input value="" id="eventTitle" name="eventTitle" class="newEvent__input" type="text" placeholder="Title">
//          </div>
//          <div>
//             <input value="" id="eventURL" name="eventURL" class="newEvent__input" type="text" placeholder="URL of event">
//          </div>
//          <textarea id="eventDescription" name="eventDescription" class="newEvent__input newEvent__description" placeholder="Story behind your event..."></textarea>
//          <button id="newEvent__submit">Save</button>
//          <button id="newEvent__cancel">Delete</button>
//       </div>
//    `

//    addEventHTML += `</div>`

//    return addEventHTML
// }