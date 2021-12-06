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
            <button id="contact">Contact Us</button>
            <div id="content">
                <div>WHY LOOSELEAF?</div>
                <div>PRICING</div>
                <div>RESOURCES</div>
                <div>OUR OFFICES</div>
            </div>
            <div id="content1">
                <div>
                    CONTACT NUMBER
                </div>
                <div>
                    +91-9310823646
                </div>
                <div>
                    Illustrations by StorySet
                </div>
                <div>
                &copy; 2021 Looseleaf, LLP, All Rights Reserved
                </div>
                <div class="social-links">
                        <a href="#"><i class="fa fa-facebook-f"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
                <div>
                </div>
            </div>
</div>
    );
};