import React, { Component } from "react";
import "./style/boxes.css";

export default class Boxes extends Component {
    render() {
        return (
            <div className="container1">
                <h4 className="text1" style={{ textAlign: "left" }}>
                    <b>
                        {" "}
                        What Goal,Bugdes & Skills are achived in this class??
                    </b>
                </h4>

                <div className="boxes">
                    <div>
                        <button>Explorer</button>
                    </div>
                    <div>
                        <button>Powerhouse of ideas</button>
                    </div>
                    <div>
                        <button>Daredevil</button>
                    </div>
                    <div>
                        <button>The troublreshooter</button>
                    </div>
                    <div>
                        <button>createtive thinking</button>
                    </div>
                    <div>
                        <button>flexible thinking</button>
                    </div>
                    <div>
                        <button>maagement</button>
                    </div>
                    <div>
                        <button>statargic thinking</button>
                    </div>
                    <div>
                        <button>learn</button>
                    </div>
                </div>
                <div className="text2">
                    <h4 style={{ textAlign: "left" }}>
                        <b>What will be covered in this class??</b>
                    </h4>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <br />
                    <h4>
                        <b>WHat are the post-class assignment??</b>
                    </h4>
                </div>
                <div className="new">
                    <div className="box1">
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "lightgray",
                                borderRadius: "20%",
                            }}
                        ></div>
                        #3 Words in French
                    </div>
                    <div className="box2">
                        <div
                            style={{
                                width: "150px",
                                height: "150px",
                                backgroundColor: "lightgray",
                                borderRadius: "20%",
                            }}
                        ></div>
                        #3 Works in French
                    </div>
                    <div className="box3"></div>
                    <div className="box3"></div>
                    <div className="box3"></div>
                </div>
            </div>
        );
    }
}
