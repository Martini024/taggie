import React, {Component} from 'react';
import './SingleInput.css';
import $ from "jquery";

class SingleInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null,
            type: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        var self = this;
        var value = $("#input").val();
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
                    res['type'] = data.type;
                    res['message'] = "success!!!";
                } else {
                    res['type'] = null;
                    res['message'] = data.message;
                }
                self.setState(res);
            }
        });
    }

    render() {
        return (<div className="single-wrapper">
            <div>
                <h1>SingleInput</h1>
                <input id="input"></input>
                <button onClick={this.handleClick}></button>
            </div>
            <div>
                <h1>{this.state.message}</h1>
                <h1>{this.state.type}</h1>
            </div>
        </div>);
    }
}

export default SingleInput;
