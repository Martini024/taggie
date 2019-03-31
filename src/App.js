import React, {Component} from 'react';
import DemoVideo from './DemoVideo.js';
import Introdection from './Introduction.js';
import Wrapper from './Wrapper.js';
import {SectionsContainer, Section} from 'react-fullpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

library.add(faTags);

class App extends Component {

    render() {
        let options = {
            activeClass: 'active',
            anchors: [
                'sectionOne', 'sectionTwo', 'sectionThree'
            ],
            arrowNavigation: false,
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
                        <a href="https://martini024.github.io/taggie-chinese/">Chinese/English</a>
                    </li>
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
                        <DemoVideo video="https://taggie.tech./download/demo.mp4"/>
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
