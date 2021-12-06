import React from 'react';
import './Main.css';
import { Footer } from "./Footer";
export const Main = () => {
    return (
<div id="main">
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
                <div className="f1">
                <div id="font">
                     CONTACT NUMBER
                </div>
                <div>
                    +91-9310823646
                </div>
                </div>
                <div className="f2">

                <div>
                    Illustrations by StorySet
                </div>
                <div>
                &copy; 2021 Looseleaf, LLP, All Rights Reserved
                </div>
                </div>
                <div className="social-links">
                        <a href="#"><i className="fa fa-whatsapp"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-facebook-f"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
                <div>
                    Made In India <span aria-label="🇮🇳" role="img">🇮🇳</span> With <span aria-label="heart" role="img">❤️ </span>
                </div>
            </div>
                <div id="last">
                    <div>
                        Privacy
                    </div>
                    <div>
                        Terms
                    </div>
                    <div>
                        Contact Us
                    </div>
                </div>
</div>
    );
};