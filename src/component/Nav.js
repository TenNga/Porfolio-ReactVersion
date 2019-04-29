import React from 'react';
import '../css/nav.css';

class Nav extends React.Component{

    getLink = (link) =>{
        this.props.getLink(link);
    };

    render(){
        return (
        <div className="navBar">
            <h4 id="logo" onClick ={()=>this.getLink("home")}>KEVIN KARMA</h4>
            <div className="navButtons">
                <ul id="navList">
                    <li id="item" onClick ={()=>this.getLink("about_me")}>About me</li>
                    <li id="item" onClick ={()=>this.getLink("resume")}>Resume</li>
                    <li id="item" onClick ={()=>this.getLink("project")}>Project</li>
                    <li id="item" onClick ={()=>this.getLink("links")}>Links</li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Nav;