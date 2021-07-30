import React, { useContext, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useHistory } from 'react-router-dom';

export const EventForm = () => {
  const { addEvent } = useContext(EventContext)
  const history = useHistory()
  /*
  With React, we do not target the DOM with `document.querySelector()`. Instead, our return (render) reacts to state or props.
  Define the intial state of the form inputs with useState()
  */

  const [event, setEvent] = useState({
    title: "",
    city: "",
    date: "",
    url: "",
    userId: 0
  })

 
  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */

  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (e) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newEvent = { ...event }
    /* Event is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newEvent[e.target.id] = e.target.value
    console.log(e.target.value)
    // update state
    setEvent(newEvent)
  }

  const handleClickSaveEvent = (e) => {
    e.preventDefault() //Prevents the browser from submitting the form

    const currentUserId = parseInt(localStorage.getItem("Outnabout_user"))

      //Invoke addEvent passing the new article object as an argument
      //Once complete, change the url and display the article list

      const newEvent = {
        title: event.title,
        city: event.city,
        date: event.date,
        url: event.url,
        userId: currentUserId
      }
      addEvent(newEvent)
      .then(() => history.push("/"))
    }
  
  return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Event title:</label>
          <input type="text" id="title" required autoFocus className="form-control" placeholder="Event title" value={event.title} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="city">Event city:</label>
          <input type="text" id="city" required autoFocus className="form-control" placeholder="Event city" value={event.city} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Event date:</label>
          <input type="date" id="date" required autoFocus className="form-control" placeholder="Event date" value={event.date} onChange={handleControlledInputChange} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="url">Event url:</label>
          <input type="text" id="url" required autoFocus className="form-control" placeholder="Event url" value={event.url} onChange={handleControlledInputChange} />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveEvent}>
        Save Event 
          </button>
                      
    </form>
  )
}  

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