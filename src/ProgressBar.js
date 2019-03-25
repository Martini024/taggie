import React, {Component} from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
    render() {
        const width = (this.props.now * 100).toFixed(2);
        return (
            <div className="progress">
                <div className="progressBar" style={{width : width + '%'}}>{width + '%'}</div>
            </div>

        );
    }
}

export default ProgressBar;
