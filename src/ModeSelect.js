import React, {Component} from 'react';
import './ModeSelect.css';

class ModeSelect extends Component {

    constructor() {
        super()
        this.state = {
            mode: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <select id="modeSelect" value={this.state.mode} name="mode" onChange={this.handleChange}>
                <option defaultValue value="0">Precision Priority</option>
                <option value="1">Efficiency Priority</option>
            </select>
        );
    }
}

export default ModeSelect;
