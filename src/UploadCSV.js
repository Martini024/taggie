import React, { Component } from "react";
import "./UploadCSV.css"
import ModeSelect from './ModeSelect.js';

class UploadCSV extends Component {
    render() {
        return (
            <div className="fileContainer">
                <input className="fileInput" type="file" name="Upload" accept=".csv" id="csvFileUpload"  onChange={this.props.handleFileUpload} />
                <label className="fileInputLabel">Upload CSV</label>
                <ModeSelect handleChange={this.props.handleChange} mode={this.props.mode}/>
            </div>

        );
    }
}

export default UploadCSV;
