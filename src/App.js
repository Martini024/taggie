import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Sunburst from './Sunburst.js';
import UploadCSV from './UploadCSV.js';
import Introdection from './Introduction.js';
import DemoVideo from './DemoVideo.js';
import Wrapper from './Wrapper.js';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTags } from '@fortawesome/free-solid-svg-icons'

library.add(faTags)

class App extends Component {

    render() {
        let options = {
            activeClass: 'active',
            anchors: [
                'sectionOne', 'sectionTwo', 'sectionThree'
            ],
            arrowNavigation: true,
            className: 'SectionContainer',
            delay: 700,
            navigation: false,
            scrollBar: false,
            sectionClassName: 'Section',
            verticalAlign: true
        };
        return (
            <>
                <h1 className="logo"><FontAwesomeIcon icon="tags" /> Taggie</h1>
                <ul className="menu">
                    <li>
                        <a href="#sectionOne" className="active">Demo Video</a>
                    </li>
                    <li>
                        <a href="#sectionTwo">Introduction</a>
                    </li>
                    <li>
                        <a href="#sectionThree">Try it yourself!</a>
                    </li>
                </ul>
                <SectionsContainer {...options}>
                    <Section>
                        <DemoVideo />
                    </Section>
                    <Section>
                        <Introdection />
                    </Section>
                    <Section>
                        <Wrapper />
                    </Section>
                </SectionsContainer>
            </>
        );
    }
}
export default App;
