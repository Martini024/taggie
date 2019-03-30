import React, { Component } from 'react';
import './DemoVideo.css';

class DemoVideo extends Component {
    render() {
        return (
            <div className="video-wrapper">
                <video src="./video/Demo/Taggie.m4v" className="demoVideo" controls autoPlay muted playsInline type="video/mp4"></video>
            </div>
        );
    }
}

export default DemoVideo;
