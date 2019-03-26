import React, {Component} from 'react';
import './ModeSelect.css';

class ModeSelect extends Component {
    render() {
        return (
            <select id="modeSelect" value={this.props.mode} name="mode" onChange={this.props.handleChange}>
                <option defaultValue value="0">Precision Priority</option>
                <option value="1">Efficiency Priority</option>
            </select>
        );
    }
}

export default ModeSelect;
