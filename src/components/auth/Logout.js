import React from 'react';
import {  Link } from "react-router-dom";

export const Logout = () => {
    
    const clearUser = () => {
        localStorage.removeItem("afe_user")
    }

    return (
        <div>
            <Link to="/"><button onClick={clearUser}>Logout</button></Link>
        </div>
    )
}
