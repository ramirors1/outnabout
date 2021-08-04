import React, { useState, createContext } from "react"

export const InterestedContext = createContext()

// This component establishes what data can be used.
export const InterestedProvider = (props) => {
    const [interested, setInterested] = useState([])

    const getInterested = () => {
        return fetch("http://localhost:8088/interested?_expand=user_expand=event")
        .then(res => res.json())
        .then(setInterested)
    }

    const getInterestedById = (id) => {
        return fetch(`http://localhost:8088/interested/${id}?_expand=user_expand=event`)
        .then(res => res.json()) // note we don't set anything on state here. Why?
    }

    const addInterested = interestedObj => {
        return fetch("http://localhost:8088/interested", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestedObj)
        })
        .then(getInterested)
    }

    return (
        <InterestedContext.Provider value={{
            interested, getInterested, addInterested, getInterestedById
        }}>
            {props.children}
        </InterestedContext.Provider>
    )
}