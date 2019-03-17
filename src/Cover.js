import React, {Component} from "react";
import { Navbar } from "react-bootstrap";
// import { Image } from "react-bootstrap";
import "./Cover.css"
import logo from "./img/logo.svg"


class Cover extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top"/> {' React Bootstrap'}
                    </Navbar.Brand>
                </Navbar>
                <div className="bg-image">
                    
                </div>
            </div>
        );
    }
}

export default Cover;
