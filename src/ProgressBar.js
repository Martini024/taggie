import React, {Component} from 'react';
import { FormattedMessage } from 'react-intl';
import './ProgressBar.css';

class ProgressBar extends Component {
    render() {
        const width = (this.props.now * 100).toFixed(2);
        return (
            <div className="progress">
                <div className="progressBar" style={{width : width + '%'}}>
                    <FormattedMessage id="single.progress" defaultMessage="Accuracy      "/>
                    <span>{width + '%'}</span>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
