import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    const [searchTerms, setSearchTerms] = useState("");

    const getFriendById = (id) => {
        return fetch(`http://localhost:8088/friends/${id}?_expand=user`).then((res) =>
            res.json()
        ) // note we don't set anything on state here. Why?
    }

     const getFriends = () => {
        return fetch("http://localhost:8088/friends?_expand=user")
            .then((res) => res.json())
            .then(setFriends)
    } 
    const addFriend = (friendObj) => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friendObj),
        }).then(getFriends)
    }

    const updateFriend = (friend) => {
        return fetch(`http://localhost:8088/friends/${friend.id}?_expand=user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(friend),
        }).then(getFriends)
    }

    const removeFriend = friendId => {
        return fetch(`http://localhost:8088/friends/${friendId}?_expand=user`, {
            method: "DELETE"
        })
            .then(getFriends)
    }

    return (
        <FriendContext.Provider
            value={{
                friends,
                getFriends,
                addFriend,
                getFriendById,
                updateFriend,
                removeFriend,
                searchTerms,
                setSearchTerms
            }}
        >
            {props.children}
        </FriendContext.Provider>
    )
}