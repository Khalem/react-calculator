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
            executed: false
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
        if (this.state.needDigit === false || this.state.executed) {
            if (this.state.executed) {
                var newPath = [];
            } else {
                var newPath = this.state.path;
            }
            newPath.push(this.state.value);
            newPath.push(event.target.value);
            this.setState({ path: newPath, needDigit: true, symbolClicked: true, executed: false});
            if (this.state.path.length > 2 && this.state.path.length % 2 === 0) {
                this.automaticExecute();
            }
        } else {
            return false;
        }
    }

    execute() {
        if (this.state.path.length >= 2 && this.state.executed === false) {
            let newPath = this.state.path;
            newPath.push(this.state.value);
            this.setState({ path: newPath});
            let newStr = this.state.path.join("");
            let result = eval(newStr);
            this.setState({value: result, needDigit: true, symbolClicked: true, executed: true});
        } else {
            return false;
        }
            
        
    }

    automaticExecute() {
        let newPath = this.state.path.slice(0, this.state.path.length - 1);
        let newStr = newPath.join("");
        let result = eval(newStr);
        this.setState({ value: result, needDigit: true, symbolClicked: true });
    }

    posNeg() {
        let value = this.state.value;
        if (value[0] !== "-") {
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
            needDigit: true,
            path: [],
            symbolClicked: false,
            executed: false
        });
    }

    clearValue() {
        this.setState({ value: "" });
    }

    render() {
        return(
            <div>
                <h1 className="center">React <span>Calculator</span></h1>
                <div className="center center-block calculator">
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

