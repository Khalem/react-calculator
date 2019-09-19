import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from "./Buttons";

import './index.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1 className="center">React Calculator</h1>
                <div className="center center-block">
                    <p>Sum</p>
                    <p>Number</p>
                    <Buttons />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

