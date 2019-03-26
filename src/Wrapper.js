import React, { Component } from 'react';
import SingleInput from './SingleInput.js';
import FileInput from './FileInput.js';
import './Wrapper.css';

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="spinner"></div>
                <SingleInput />
                <FileInput />
            </div>
        );
    }
}

export default Wrapper;
