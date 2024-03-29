import React from "react";

import "./index.css";

const Buttons = props => {
    return(
        <div class="container">
            <div className="row">
                    <div className="col-3">
                        <button onClick={props.clearAll}>C</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.clearValue}>CE</button>
                    </div>
                    <div className="col-3">
                        <button onClick={props.calculation} value="/">/</button>
                    </div>
                    <div className="col-3">
                        <button onClick={props.calculation} value="*">X</button>
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
                    <button onClick={props.calculation} value="-">-</button>
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
                    <button onClick={props.calculation} value="+">+</button>
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
                    <button onClick={props.posNeg}>+-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value=".">.</button>
                    </div>
                    <div className="col-3">
                    <button onClick={props.digitOnClick} value="0">0</button>
                    </div>
                    <div className="col-6">
                    <button onClick={props.execute}>=</button>
                    </div>
                </div>
            </div>
    );
}

export default Buttons;