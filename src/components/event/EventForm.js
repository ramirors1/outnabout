import React, { useContext, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useHistory } from 'react-router-dom';

export const EventForm = () => {
  const { addEvent } = useContext(EventContext)
  const history = useHistory()

  const [event, setEvent] = useState({
    title: "",
    city: "",
    date: "",
    url: "",
    comment: "",
    userId: 0
  })

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

      //Invoke addEvent passing the new event object as an argument
      //Once complete, change the url and display the article list

      const newEvent = {
        title: event.title,
        city: event.city,
        date: event.date,
        url: event.url,
        comment: event.comment,
        userId: currentUserId
      }
      addEvent(newEvent)
      .then(() => history.push("/events"))
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
      <fieldset>
        <div className="form-group">
          <label htmlFor="url">Comment:</label>
          <input type="text" id="comment" required autoFocus className="form-control" placeholder="Comment" value={event.comment} onChange={handleControlledInputChange} />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveEvent}>
        Save Event 
          </button>
                      
    </form>
  )
}  

