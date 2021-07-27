import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <>
        <h2>Out-N-About</h2>
        <small>Explore and enjoy what TN has to offer.</small>

        <address>
            <div>Here and there</div>
        </address>
        <PropsAndState yourName={""} />
    </>
)