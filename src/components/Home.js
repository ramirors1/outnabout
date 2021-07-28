import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Out-N-About</h2>
        <small>Looking for something to do in TN.</small>

        <address>
            <div>Check it out</div>
        </address>
        <PropsAndState yourName={"Event Seeker"} />
    </>
)