import React from 'react';
import { Component } from 'react';

export default class Counter2 extends Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState(prev => ({ count: prev.count + 1 }));
    };

    decrement = () => {
        this.setState(prev => ({ count: prev.count - 1 }));
    }

    render() {
        return (
            <>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </>
        )
    }

}

export class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        };
    }

    add = (a, b) => {
        this.setState({ result: a + b });
    }
    render() {
        return (
            <>
                <p>Props: {this.props.value}</p>
                <p>Result: {this.state.result}</p>
                <button onClick={() => this.add(5, 10)}>Add 5 and 10</button>
            </>
        );
    }
}