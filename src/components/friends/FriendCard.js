import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../users/UserProvider"

export const FriendItem = ({ friend }) => {
    const { users, getUsers } = useContext(UserContext)
    
    const currentUserId = parseInt(sessionStorage.getItem("Outnabout_user"))

      useEffect(()=> {
        getUsers()
    }, [])
  
    return(
    <section className="friend">
        <h3 className="friend__name">
        <Link to={`/friends/detail/${friend.user?.id}`}>
            {           
               friend.user?.name
            }
        </Link>
        </h3>
    </section>)
}