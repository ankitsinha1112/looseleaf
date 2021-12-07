import React from 'react';
import './Footer.css';
import fab from "../Image/OIP.jpg";

export const Footer = () => {
    return (
<div id="head">
<div className="top">
            <div className="box1">
                <div>
                   <img src={fab} width="25px" height="25px"/>
                </div>
                <div>looseleaf </div>
            </div>
            <div className="box2">
                <button className="btn2">
                LAUNCH LOOSELEAF </button>
                    <div className="cross">&#10006;</div>
            </div>
</div>
<div className="body">
        <div>Why Looseleaf ?</div>
        <div>Features</div>
        <div>Pricing</div>
        <div>Blogs</div>
        <div>Contact No</div>
</div>
<div id="end">
    <button className="btn1">
        TALK TO SALES
    </button>
    <button className="btn2">
        LAUNCH LOOSELEAF
    </button>
</div>
</div>
    );
};