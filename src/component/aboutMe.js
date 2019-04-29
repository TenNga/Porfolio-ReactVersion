import React from 'react';
import '../css/aboutMe.css';

const aboutme = () => {
    return (
        <div className="Wrapper">
            <div className="banner">

            </div>
            <div className="about">
                <div id="card">
                    <h3>intro</h3>
                    <ul>
                        <li id="call">> Kevin.origin();</li>
                        <li id="return">> Tibet</li>
                        <li id="call">> Kevin.grouUp();</li>
                        <li id="return">> Nepal / India</li>
                        <li id="call">> Kevin.speaks();</li>
                        <li id="return">> Tibetan, English, Hindi</li>
                    </ul>
                </div>
                <div id="card2">
                    <h3>education</h3>
                    <ul>
                        <li id="call">> education.College( );</li>
                        <li id="return">> Queens College</li>
                        <li id="call">> education.Major( );</li>
                        <li id="return">> Computer Science</li>
                        <li id="call">> education.Graduated( );</li>
                        <li id="return">> May 2018</li>
                    </ul>
                </div>
                <div id="card3">
                    <h3>interests</h3>
                    <ul>
                        <li id="call">> interests.tech( );</li>
                        <li id="return">> Code, Design, music</li>
                        <li id="call">> interests.sports( );</li>
                        <li id="return">> soccer, bike, swimming</li>
                        <li id="call">> interest.other( );</li>
                        <li id="return">> tea, gaming, food</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default aboutme;
