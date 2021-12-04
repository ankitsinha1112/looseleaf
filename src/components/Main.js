import React from 'react';
import './Main.css'

export const Main = () => {
    return (
<div>
            <div className="heading">
            Contact us to get started.
            </div>
        <div className="input_values">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Institute Name" />
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Phone Number" />
            </div>
            <button>Contact Us</button>
</div>
    );
};