import React, {Component} from 'react';
import {defineMessages, injectIntl } from 'react-intl';
import './ModeSelect.css';

const messages = defineMessages({
    firstoption: {
        id: 'file.modeSelect1',
        defaultMessage: 'Efficiency Priority',
    },
    secondoption: {
        id: 'file.modeSelect2',
        defaultMessage: 'Precision Priority',
    }
});

class ModeSelect extends Component {
    render() {
        const {formatMessage} = this.props.intl;
        return (
            <select id="modeSelect" value={this.props.mode} name="mode" onChange={this.props.handleChange}>
                <option defaultValue value="0">
                    {formatMessage(messages.firstoption)}
                </option>
                <option value="1">
                    {formatMessage(messages.secondoption)}
                </option>
            </select>
        );
    }
}

export default injectIntl(ModeSelect);
