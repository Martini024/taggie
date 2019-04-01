import React, {Component} from 'react';
import ProgressBar from './ProgressBar.js';
import $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SingleInput.css';

library.add(faTags);

class SingleInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: ['', '', ''],
            prob: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var self = this;
        var value = $("#singleInput").val();
        const url = "https://taggie.tech./upload?productname=\"" + value + "\"";
        $.ajax({
            url: url,
            type: "GET",
            dataType: "json",
            crossDomain: true,
            success: function(data) {
                var res = {};
                if (data.code === 0) {
                    res['type'] = data.type.split("--");
                    res['prob'] = data.prob;
                } else {
                    res['type'] = ['', '', ''];
                    res['prob'] = 0;
                    alert(data.message);
                }
                self.setState(res);
            }
        });
    }

    render() {
        return (<div className="single-wrapper">
            <h1 id="singleTitle">
                <FormattedMessage id="single.mode" defaultMessage="Single Mode"/>
            </h1>
            <div alt="" id="singleImg"></div>
            <div>
                <FormattedMessage id="single.input" defaultMessage="Product Name">
                    {
                        placeholder => (
                            <input id="singleInput" placeholder={placeholder} />
                        )
                    }
                </FormattedMessage>
                <button id="singleCommit" onClick={this.handleClick}>
                    <FormattedMessage id="single.start" defaultMessage="Get Started!"/>
                </button>
            </div>
            <div>
                {
                    this.state.type.length !== 0
                        ? <div className="typeGroup">
                                <label id="type1" className="btn singleType"><FontAwesomeIcon icon="tags" />{this.state.type[0]}</label>
                                <label id="type2" className="btn singleType"><FontAwesomeIcon icon="tags" />{this.state.type[1]}</label>
                                <label id="type3" className="btn singleType"><FontAwesomeIcon icon="tags" />{this.state.type[2]}</label>
                            </div>
                        : null
                }
            </div>
            <div>
                <ProgressBar now={this.state.prob}/>
            </div>
        </div>);
    }
}

export default SingleInput;
