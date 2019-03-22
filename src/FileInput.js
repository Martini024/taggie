import React, { Component } from 'react';
import './FileInput.css';
import UploadCSV from './UploadCSV.js';

class FileInput extends Component {
    render() {
        return (
            <div className="file-wrapper">
                <h1>FileInput</h1>
                <UploadCSV />
            </div>
        );
    }
}

export default FileInput;
