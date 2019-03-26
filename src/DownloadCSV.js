import React, {Component} from "react";
import "./DownloadCSV.css";

class DownloadCSV extends Component {
    render() {
        return (
            <a id="download" download href={this.props.href}>Download</a>
        );
    }
}

export default DownloadCSV;
