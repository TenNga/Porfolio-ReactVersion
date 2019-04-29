import React from 'react';
import '../css/body.css'

const Body = () =>{
    return (
        <div className="container-body">
            <div className="arts">
                <div className="aboutArt">
                    <div className="backAbout">
                      <h1>Design</h1>
                    </div>
                </div>
                <div className="resumeArt">
                <div className="backResume">
                      <h1>Developer</h1>
                    </div>
                </div>
                <div className="projectArt">
                <div className="backProject">
                      <h1>Publish</h1>
                    </div>
                </div>
            </div>
        </div>
        
        );
}

export default Body;