import React, { Component } from 'react';
import './DemoVideo.css';

class DemoVideo extends Component {
    render() {
        return (
            <div className="video-wrapper">
                <video className="demoVideo" controls>
                    <source src={this.props.video} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
            </div>
        );
    }
}

export default DemoVideo;
