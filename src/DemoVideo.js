import React, { Component } from 'react';
import './DemoVideo.css';

class DemoVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // heading: props.heading,
            video: props.video,
            poster: props.poster,
        }
    }

    render() {
        return (
            <div className="video-wrapper">
                <video className="demoVideo" src={ this.state.video } poster={ this.state.poster } controls>
                </video>
            </div>
        );
    }
}

export default DemoVideo;
