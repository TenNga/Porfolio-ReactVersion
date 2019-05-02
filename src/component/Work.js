import React from 'react';
import '../css/work.css';

const Work = () => {
    return (
    <div className="ProjectWrapper">
        <div className="heading">
        <h1>My Recent Works</h1>
        <h5>Following is few of my design project. Want to see more, visit <a href="https://github.com/TenNga">Github</a></h5>
        </div>
        <div className="projectList">
            <div id="projectCard" className="ReactImgVid">
                <div id="innerCard" className="ReactDesc">
                    <h3>React Image Search Engine</h3>
                    <p>This react web application will use API from unsplash website to give free images and on each click on image will give user the full resolution of the image itself.</p>
                    <a href="https://github.com/TenNga/Video-Search-Engine-React" ><button id="gitHub">github link</button></a>
                </div>
            </div>
            <div id="projectCard" className="TopDownload">
                <div id="innerCard" className="TopDownloadDesc">
                    <h3>Top Downloader App</h3>
                    <p>This application is capable of showing top download app from apple store by using rss feed resource from Apple.</p>
                    <a href="https://github.com/TenNga/TopDownload" ><button id="gitHub">github link</button></a>
                </div>
            </div>
            <div id="projectCard" className="TipCalculator">
                <div id="innerCard" className="TipCalcDesc">
                    <h3>Tip Calculator</h3>
                    <p>Help you calculate tips in restaurant even with group of poeple.</p>
                    <a href="https://github.com/TenNga/TipCalculator" ><button id="gitHub">github link</button></a>
                </div>
            </div>
            <div id="projectCard" className="listManager">
                <div id="innerCard" className="listManageDesc">
                    <h3>Grocery List Manager</h3>
                    <p>Create multiple grocery lists. Add, delete and change the quantity of items in your lists. Checked and unchecked individually or together.</p>
                </div>
            </div>
            <div id="projectCard" className="DatabaseNBA">
                <div id="innerCard" className="DatabaseDesc">
                    <h3>NBA Database Project</h3>
                    <p>Used MySQL to analyze the data, Solve problem/Error, Result with Diagram, no error.</p>
                    <a href="https://github.com/TenNga/NBA-database-" ><button id="gitHub">github link</button></a>
                </div>
            </div>
            <div id="projectCard" className="soccerLogo">
                <div id="innerCard" className="soccerDesc">
                    <h3>SOCCER TEAM LOGO</h3>
                    <p>LOGO for one of NY soccer team, indicating their culture and love for soccer.</p>
                </div>
            </div>
        </div>
    </div> 
        );
};

export default Work;