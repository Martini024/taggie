import React, {Component} from "react";
import { FormattedMessage } from 'react-intl';
import "./DownloadExampleCSV.css";

class DownloadExampleCSV extends Component {
    render() {
        return (
            <a id="downloadExample" download href={this.props.href}>
                <FormattedMessage id="file.downloadCSV" defaultMessage="Download Example CSV"/>
            </a>
        );
    }
}

export default DownloadExampleCSV;
