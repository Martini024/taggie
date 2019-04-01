import React, {Component} from 'react';
import './EncodingSelect.css';

class EncodingSelect extends Component {
    render() {
        return (
            <select id="encodingSelect" value={this.props.encoding} name="encoding" onChange={this.props.handleChange}>
                <option defaultValue value="gb18030">GB18030</option>
                <option value="utf-8">UTF-8</option>
            </select>
        );
    }
}

export default EncodingSelect;
