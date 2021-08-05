import React, { useState, createContext } from "react"
//useContext - Used by UI components that need data stored in the context, and exposed by the provider component.
// The context is imported and used by individual components that need data
export const EventContext = createContext()

// This component establishes what data can be used by other components.
export const EventProvider = (props) => {   //Props are used to pass data from a parent to a child component in React and they are the main mechanism for component communication
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events?_expand=user") //Returns data from json server and expanded to include data from the user object
        .then(res => res.json())
        .then(setEvents) //Re-renders the component to the browser with the current state of whats being called//
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}?_expand=user`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
          method: "DELETE"
        })
        .then(getEvents)
    }
    /*
        You return a context provider which has the
        `articles` state, `getArticles` function,
        and the `addArticle` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, getEventById, deleteEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )
}