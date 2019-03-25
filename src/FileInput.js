import React, {Component} from 'react';
import './FileInput.css';
import UploadCSV from './UploadCSV.js';
import $ from 'jquery';
import Sunburst from './Sunburst.js';
import Popup from "reactjs-popup";
import DownloadCSV from './DownloadCSV.js';

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code : null,
            data : null,
            open : false,
            href : null,
        };
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFileUpload(e) {
        $('.spinner').show(400);
        const self = this;
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
            success: function(data, status) {
                data.results.name = "";
                data.filename = data.filename.split('/').pop();
                self.setState({'code': data.code, 'data': data.results, 'href': 'http://139.224.116.213/download/' + data.filename});
                $('.spinner').hide(400);
            }
        });
    }

    render() {
        return (<div className="file-wrapper">
            <h1 id="fileTitle">Batch Mode</h1>
            <div alt="" id="fileImg"></div>
            <UploadCSV handleFileUpload={this.handleFileUpload}/>
            <Popup trigger={<button className="showCanvas"> Open Modal < /button>} modal={true} closeOnDocumentClick={true}>
                <div className="canvas">
                    {
                        this.state.code === 0
                            ? <Sunburst data={this.state.data}/>
                            : <div></div>
                    }
                </div>
            </Popup>
            <DownloadCSV href={this.state.href}/>
    </div>);
    }
}

export default FileInput;
