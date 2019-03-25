import React, {Component} from 'react';
import './SingleInput.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProgressBar from './ProgressBar.js';
import $ from "jquery";

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
        const url = "http://139.224.116.213/upload?productname=\"" + value + "\"";
        console.log(url);
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
                    //alert the error message
                }
                self.setState(res);
            }
        });
    }

    render() {
        return (<div className="single-wrapper">
            <h1 id="singleTitle">Single Mode</h1>
            <div alt="" id="singleImg"></div>
            <div>
                <input id="singleInput" placeholder="Product Name"></input>
                <button id="singleCommit" onClick={this.handleClick}>Get Started!</button>
            </div>
            <div>
                {
                    this.state.type.length !== 0
                        ? <div>
                                <button id="type1" className="btn singleType">{this.state.type[0]}</button>
                                <button id="type2" className="btn singleType">{this.state.type[1]}</button>
                                <button id="type3" className="btn singleType">{this.state.type[2]}</button>
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
