import React from 'react';
import '../css/resume.css';

const Resume = () => {

    return (
        <div className="container-resume">

            <h3>Resume</h3>
            <div className="education">
                <div className="Edu_description">
                    <h4>Education</h4>
                    <hr />
                    <h5>Queens College <span id="year">2016-2018</span></h5>
                    <h5>Computer Science, B.A. <span id="location">New York City, NY</span></h5>
                    <ul id="subjectList">
                        <li>Data Structure</li>
                        <li>Theory of Computation</li>
                        <li>Computer Archetechture</li>
                        <li>Database (MySQL)</li>
                        <li>Design and Analysis of Algorithms</li>
                        <li>Principal of Programming language</li>
                        <li>Artificial Intelligence</li>
                        <li>Object-Oriented DB</li>
                        <li>Mobile Application Development</li>
                    </ul>
                </div>
                <div className="skillButton">
                    <ul id="skills">
                        <li>java</li>
                        <li>MySQL</li>
                        <li>oodb</li>
                        <li>git</li>
                        <li>c++</li>
                    </ul>
                </div>
            </div>
            <div className="Volunteers">
                <h4>Volunteers</h4>
                <div className="TNA_details">
                    <hr />
                    <div className="TNA_description">
                        <h5>Tibetan Nurse Association<span id="year">2019 - Present</span></h5>
                        <h5>Tech advisor/web developer<span id="location">New York City, NY</span></h5>
                        <ul id="subjectList">
                            <li>Web Development</li>
                            <li>Latest tech advise</li>
                            <li>Social Media</li>
                            <li>Graphic design</li>
                            <li>Help edit banner for events</li>
                            <li>Video editing</li>
                        </ul>
                    </div>
                    <div className="skillButton">
                        <ul id="skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>photoshop</li>
                            <li>bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="TCV_details">
                    <hr />
                    <div className="TNA_description">
                        <h5>TCV High School<span id="year">2007-2011</span></h5>
                        <h5>Tech incharge, Workshops<span id="location"> North/South India</span></h5>
                        <ul id="subjectList">
                            <li>Web Development</li>
                            <li>Presenation</li>
                            <li>Sound System Management</li>
                            <li>Installation of OS</li>
                            <li>Computer Hardward setup</li>
                            <li>Networking wiring</li>
                            <li>Photoshop</li>
                            <li>Video Editing</li>
                        </ul>
                    </div>
                    <div className="skillButton">
                        <ul id="skills">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>premiere</li>
                            <li>photoshop</li>
                            <li>networking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;