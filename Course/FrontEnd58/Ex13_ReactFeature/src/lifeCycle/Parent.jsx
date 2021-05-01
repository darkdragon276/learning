import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maSV:"",
        };
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return state;
    }

    render() {
        return (
            <Child></Child>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

}
