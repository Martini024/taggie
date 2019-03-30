import React, {Component} from 'react';
import $ from 'jquery';
import Popup from "reactjs-popup";
import UploadCSV from './UploadCSV.js';
import Sunburst from './Sunburst.js';
import DownloadCSV from './DownloadCSV.js';
import './FileInput.css';


class FileInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code : null,
            data : null,
            open : false,
            href : null,
            mode : 0,
        };
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleFileUpload(e) {
        $('.spinner').show(400);
        const self = this;
        let formData = new FormData();
        formData.append('file_test', e.target.files[0]);
        formData.append('encoding', 'utf-8');
        formData.append('deal_type', this.state.mode);
        // e.target.files.remove();
        console.log(    );
        $.ajax({
            url: "https://taggie.tech/uploadfile",
            type: "POST",
            data: formData,
            dataType: "json",
            crossDomain: true,
            processData: false,
            contentType: false,
            success: function(data, status) {
                data.results.name = "";
                data.filename = data.filename.split('/').pop();
                self.setState({
                    'code': data.code,
                    'data': data.results,
                    'href': 'https://taggie.tech/download/' + data.filename
                });
                $('.spinner').hide(400);
                $(".fileInput").val('');
            }
        });
    }

    render() {
        return (<div className="file-wrapper">
            <h1 id="fileTitle">Batch Mode</h1>
            <div alt="" id="fileImg"></div>
            <UploadCSV handleFileUpload={this.handleFileUpload} handleChange={this.handleChange} mode={this.state.mode}/>
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
