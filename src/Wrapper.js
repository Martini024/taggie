import React, { Component } from 'react';
import './Wrapper.css';
import SingleInput from './SingleInput.js';
import FileInput from './FileInput.js';

class Wrapper extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="spinner">
                    
                </div>
                <SingleInput />
                <FileInput />
            </div>
        );
    }
}

export default Wrapper;
