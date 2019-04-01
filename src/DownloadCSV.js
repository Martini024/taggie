import React, {Component} from "react";
import { FormattedMessage } from 'react-intl';
import "./DownloadCSV.css";

class DownloadCSV extends Component {
    render() {
        return (
            <a id="download" download href={this.props.href}>
                <FormattedMessage id="file.download" defaultMessage="Download"/>
            </a>
        );
    }
}

export default DownloadCSV;
