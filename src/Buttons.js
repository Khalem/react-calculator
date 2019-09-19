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
                        <button>7</button>
                    </div>
                    <div className="col-3">
                    <button>8</button>
                    </div>
                    <div className="col-3">
                    <button>9</button>
                    </div>
                    <div className="col-3">
                    <button>-</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button>4</button>
                    </div>
                    <div className="col-3">
                    <button>5</button>
                    </div>
                    <div className="col-3">
                    <button>6</button>
                    </div>
                    <div className="col-3">
                    <button>+</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                    <button>1</button>
                    </div>
                    <div className="col-3">
                    <button>2</button>
                    </div>
                    <div className="col-3">
                    <button>3</button>
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
                    <button>0</button>
                    </div>
                    <div className="col-6">
                    <button>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttons;