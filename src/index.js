import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from "./Buttons";

import './index.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            value: "",
            needDigit: true,
            path: [],
            symbolClicked: false,
        }

        this.digitOnClick = this.digitOnClick.bind(this);
        this.addition = this.addition.bind(this);
        this.execute = this.execute.bind(this);
    }

    digitOnClick(event) {
        if (this.state.symbolClicked === true) {
            this.setState({ value: ""});
            let digit = event.target.value;
            this.setState({ value: digit, needDigit: false, symbolClicked: false });
        } else {
            let digit = this.state.value;
            digit = digit + event.target.value;
            this.setState({ value: digit, needDigit: false });
        }
    }

    addition() {
        if (this.state.needDigit === false) {
            let newPath = this.state.path;
            newPath.push(this.state.value);
            newPath.push("+");
            this.setState({ path: newPath, needDigit: true, symbolClicked: true});
        }
    }

    execute() {
        if (this.state.needDigit === false) {
            let newPath = this.state.path;
            newPath.push(this.state.value);
            this.setState({ path: newPath});
            let newStr = this.state.path.join("");
            let result = eval(newStr);
            this.setState({value: result, needDigit: true, symbolClicked: true});
        }
    }

    render() {
        return(
            <div>
                <h1 className="center">React Calculator</h1>
                <div className="center center-block">
                    <p>{this.state.path}</p>
                    <p>{this.state.value ? this.state.value : "0"}</p>
                    <Buttons 
                    digitOnClick={(event) => this.digitOnClick(event)}
                    addition={this.addition}
                    execute={this.execute}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

