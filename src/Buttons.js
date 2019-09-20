import React from "react";

import "./index.css";

const Buttons = props => {
    return(
        <div className="row">
            <div className="col-12 offset-xl-4 col-xl-4">
                <div className="row">
                    <div className="col-6">
                        <button>AC</button>
                    </div>
                    <div className="col-3">
                        <button>/</button>
                    </div>
                    <div className="col-3">
                        <button>X</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <button onClick={props.digitOnClick} value="7">7</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="8">8</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="9">9</button>
                    </div>
                    <div className="col-3">
                    <button>-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="4">4</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="5">5</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="6">6</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.addition}>+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="1">1</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="2">2</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="3">3</button>
                    </div>
                    <div className="col-3">
                    <button>+-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button>.</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="2">0</button>
                    </div>
                    <div className="col-6">
                    <button onClick={props.execute}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttons;