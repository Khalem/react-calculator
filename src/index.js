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
        this.calculation = this.calculation.bind(this);
        this.execute = this.execute.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.clearValue = this.clearValue.bind(this);
        this.posNeg = this.posNeg.bind(this);
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

    calculation(event) {
        if (this.state.needDigit === false) {
            let newPath = this.state.path;
            console.log(event.target.value);
            newPath.push(this.state.value);
            newPath.push(event.target.value);
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

    posNeg() {
        let value = this.state.value;
        if (value[0] != "-") {
            value = "-" + value;
            this.setState({ value: value });
        } else {
            value = value.slice(1, value.length);
            this.setState({ value: value });
        }
    }

    clearAll() {
        this.setState({
            value: "",
            path: []
        });
    }

    clearValue() {
        this.setState({ value: "" });
    }

    render() {
        return(
            <div>
                <h1 className="center">React Calculator</h1>
                <div className="center center-block">
                    <h4>{this.state.path}</h4>
                    <h2>{this.state.value ? this.state.value : "0"}</h2>
                    <Buttons 
                    digitOnClick={(event) => this.digitOnClick(event)}
                    calculation={(event) => this.calculation(event)}
                    execute={this.execute}
                    clearAll={this.clearAll}
                    clearValue={this.clearValue}
                    posNeg={this.posNeg}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

