import React from 'react';
import Nav from './Nav';
import AboutMe from './aboutMe';
import Resume from './Resume';
import Work from './Work';
import Links from './Links';
import Body from './Body';

class App extends React.Component {
    state = { link: "" };

    setLink = (link) => {
        this.setState({ link });
    }

    processClick(value) {
        switch(value){
            case 'about_me':
                return <AboutMe />;
            case 'resume':
                return <Resume />;
            case 'project':
                return <Work />;
            case 'links':
                return <Links />;
            case 'home':
                return <Body />;
            default:
                return <Body />;
        }
    }

    render() {
        const clickValue = this.state.link;

        return (
            <div className="PageWrapper">
                <div>
                    <Nav getLink={this.setLink} />
                </div>
                <div className="contain">
                    {this.processClick(clickValue)}
                </div>
            </div>

        );
    }
}

export default App;