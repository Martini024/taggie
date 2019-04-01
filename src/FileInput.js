import React, {Component} from 'react';
import $ from 'jquery';
import Popup from "reactjs-popup";
import UploadCSV from './UploadCSV.js';
import Sunburst from './Sunburst.js';
import DownloadCSV from './DownloadCSV.js';
import DownloadExampleCSV from './DownloadExampleCSV.js';
import { FormattedMessage } from 'react-intl';
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
            encoding : "gb18030",
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
        formData.append('encoding', this.state.encoding);
        formData.append('deal_type', this.state.mode);
        $.ajax({
            url: "https://taggie.tech./uploadfile",
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
                    'href': 'https://taggie.tech./download/' + data.filename
                });
                $('.spinner').hide(400);
                $(".fileInput").val('');
            }
        });
    }

    render() {
        const time = new Date().getTime();
        return (<div className="file-wrapper">
            <h1 id="fileTitle">
                <FormattedMessage id="file.mode" defaultMessage="Batch Mode"/>
            </h1>
            <div alt="" id="fileImg"></div>
            <DownloadExampleCSV href={"https://taggie.tech./download/demo.csv?time=" + time}/>
            <UploadCSV handleFileUpload={this.handleFileUpload} handleChange={this.handleChange} mode={this.state.mode} encoding={this.state.encoding}/>
            <Popup trigger={<button className="showCanvas"> <FormattedMessage id="file.sunburst" defaultMessage="Open Model"/>
             < /button>} modal={true} closeOnDocumentClick={true}>
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
