import React, { Component } from "react";
import "./style/navbar.css";
import NavbarBar from "./NavbarBar";

class Navbar extends Component {
    static propTypes = {};
    myFunction = (event) => {
        console.log("joi");
        event.preventDefault();
        var x = document.getElementById("myTopnav");
        console.log(x);
        if (x.className === "navbar") {
            x.className += " responsive";
        } else {
            x.className = "navbar";
        }
    };
    render() {
        return (
            <div>
                <div className="navbar" id="myTopnav" ref="cpDev1">
                    <a className="active" href="#" style={{ color: "#ff0000" }}>
                        <b>REAL SCHOOL</b>
                    </a>
                    <a className="other" href="#">
                        MasterClasses
                    </a>
                    <a className="other" href="#">
                        Programs
                    </a>
                    <a className="other" href="#">
                        Challenges
                    </a>
                    <a className="other" href="#">
                        Libraray
                    </a>
                    <a className="other-btn" href="#">
                        INR 200
                    </a>
                    <div onClick={this.myFunction}>
                        <i class="fa fa-bars" id="icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
