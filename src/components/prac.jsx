import React, { Component } from 'react';

export function Prac1() {
    return (
        <div className="card">
            <h1>This is a Functional Component</h1>
        </div>
    );
}

export class Prac2 extends Component {
    render() {
        return (
            <div className="card">
                <h1>This is a Class Component</h1>
            </div>
        )
    }
}

export function PropExample(props) {
    return (
        <div className="card">
            <h4>Hello {props.name} </h4>
        </div>
    )
}