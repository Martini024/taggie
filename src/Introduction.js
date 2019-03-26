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
                <h1 id="description">Sunt reprehenderit doctrina aliqua excepteur si sed nulla eu enim ab iudicem
                aliqua export quibusdam quae id velit ingeniis efflorescere. Nam malis et
                </h1>
            </div>
        );
    }
}

export default Introduction;
