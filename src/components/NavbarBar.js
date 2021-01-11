import React, { Component } from "react";
import "./style/navbarBar.css";
import image from "./style/image.png";
import Boxes from "./Boxes";

class NavbarBar extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="image">
                        <div className="navigation">
                            <span className="second">
                                Home
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                >
                                    {" "}
                                    Goals{" "}
                                </i>
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                >
                                    Explorer
                                </i>
                            </span>
                        </div>

                        <div>
                            <h3>
                                <b>Trip to the Palace</b>
                            </h3>
                            <span>
                                <h6>Online Museum 8+ Years</h6>
                            </span>
                        </div>

                        <div></div>

                        <img className="image1" src={image} />
                    </div>
                    <div className="second-block">
                        <div classname="details">
                            <div className="div1"></div>
                            <div className="div2"></div>

                            <div className="div3">
                                choose slot
                                <br />
                                <button className="button1">10.30AM</button>
                                <button className="button1">5 PM</button>
                                <button className="button1">6 PM</button>
                                <br />
                                57 min left
                            </div>
                            <div className="div4"></div>
                            <div className="div5">
                                <button
                                    className="button2"
                                    style={{
                                        width: "80px",
                                        backgroundColor: "burlywood",
                                    }}
                                >
                                    INR 60
                                </button>
                                Earn 100 points <br />
                                <br />
                                <button className="button2">
                                    Book this class for free
                                </button>
                                <button className="button2">Share</button>
                            </div>
                            <div className="div6">
                                <button></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavbarBar;
