//Displays the below on homepage of app once logged in//
import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Out-N-About</h2>

        <PropsAndState yourName={"Event Seeker"} />

        <medium>Looking for something to do in TN.</medium>

        <address>
            <div>Check it out</div>
        </address>
        
    </>
)
 