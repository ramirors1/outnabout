import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EventContext = createContext()

// This component establishes what data can be used.
export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events?_expand=user")
        .then(res => res.json())
        .then(setEvents)
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
        .then(setEvents)
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