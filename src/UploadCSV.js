import React, { Component } from "react";
import ModeSelect from './ModeSelect.js';
import EncodingSelect from './EncodingSelect.js';
import { FormattedMessage } from 'react-intl';
import "./UploadCSV.css"

class UploadCSV extends Component {
    render() {
        return (
            <div className="fileContainer">
                <input className="fileInput" type="file" name="Upload" accept=".csv" id="csvFileUpload"  onChange={this.props.handleFileUpload} />
                <label className="fileInputLabel">
                    <FormattedMessage id="file.uploadCSV" defaultMessage="Upload CSV"/>
                </label>
                <ModeSelect handleChange={this.props.handleChange} mode={this.props.mode}/>
                <EncodingSelect handleChange={this.props.handleChange} encoding={this.props.encoding}/>
            </div>

        );
    }
}

export default UploadCSV;
