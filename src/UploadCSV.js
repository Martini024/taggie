import React, { Component } from "react";
import $ from "jquery";
import "./UploadCSV.css"

class UploadCSV extends Component {
    handleFileUpload(e) {
        let formData = new FormData();
        formData.append('file', e.target.files[0])
        $.ajax({
            url: "https://e0d92634.ngrok.io/test",
            type: "POST",
            data: formData,
            processData: false,
            contentType: false
        });
    }
    render() {
        return (
            <input type="file" name="Upload" id="csvFileUpload"  onChange={this.handleFileUpload} />
        );
    }
}

export default UploadCSV;
