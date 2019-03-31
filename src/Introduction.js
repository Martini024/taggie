import React, { Component } from 'react';
import './Introduction.css';

class Introduction extends Component {
    render() {
        return (
            <div className="intro-wrapper">
                <h1 id="title">How it works</h1>
                <div id="excel"></div>
                <div className="arrowLeft"></div>
                <div id="broswer"></div>
                <div className="arrowRight"></div>
                <div id="excel-with-content"></div>
                <h1 id="single-description">In single mode, input the product name, output the classification result and the accuracy.</h1>
                <h1 id="batch-description">In batch mode, input the csv file having only one column ITEM_NAME, output the sunburst diagram (data visualization) and user can download the classified file.</h1>
            </div>
        );
    }
}

export default Introduction;
