import React, { Component } from "react";
import $ from "jquery";
import "./UploadCSV.css"

class UploadCSV extends Component {

    handleFileUpload(e) {
        let formData = new FormData();
        formData.append('file_test', e.target.files[0]);
        formData.append('encoding', 'utf-8');
        $.ajax({
            url: "http://139.224.116.213/uploadfile",
            type: "POST",
            data: formData,
            dataType: "json",
            crossDomain: true,
            processData: false,
            contentType: false,
            success: function (data, status) {
                        console.log(data);
                },
        });
    }
    render() {
        return (
            <input type="file" name="Upload" id="csvFileUpload"  onChange={this.handleFileUpload} />
        );
    }
}

export default UploadCSV;
