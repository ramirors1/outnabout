import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Out-N-About</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/events">Events</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/interested">Interested</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/messages">Messages</Link>
            </li> */}
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Logout</Link>
            </li>
        </ul>
    )
}