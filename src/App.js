import React, {Component} from 'react';
import DemoVideo from './DemoVideo.js';
import Introdection from './Introduction.js';
import Wrapper from './Wrapper.js';
import Message from './Message.js';
import { SectionsContainer, Section } from 'react-fullpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { IntlProvider, FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

library.add(faTags);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locale : "en"
        };
        this.handleLocale = this.handleLocale.bind(this);
    }

    handleLocale() {
        this.state.locale === "en" ? this.setState({locale : "zh"}) : this.setState({locale : "en"}, function() {        console.log(Message[this.state.locale]);
});
    }

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
            <IntlProvider locale={this.state.locale} messages={Message[this.state.locale]}>
                <div>
                    <h1 className="logo"><FontAwesomeIcon icon="tags" /> Taggie</h1>
                    <ul className="menu">
                        <li>
                            <a href="#" onClick={this.handleLocale}>
                                <FormattedMessage id="nav.locale" defaultMessage="Chinese/English"/>
                            </a>
                        </li>
                        <li>
                            <a href="#sectionOne" className="active">
                                <FormattedMessage id="nav.demoVideo" defaultMessage="Demo Video"/>
                            </a>
                        </li>
                        <li>
                            <a href="#sectionTwo">
                                <FormattedMessage id="nav.introdection" defaultMessage="Introduction"/>
                            </a>
                        </li>
                        <li>
                            <a href="#sectionThree">
                                <FormattedMessage id="nav.tryItYourself" defaultMessage="Try it yourself!"/>
                            </a>
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
                </div>
            </IntlProvider>
        );
    }
}
export default App;
