import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = () => {
        alert("hello Chu Hai Nam");
    }

    showMess = (content) => {
        alert(content);
    }

    handleClickUnBound = function() {
        alert("hello unbound");
    }

    render() {
        return (
            <div className="container">
                <button id="buttonClick" className="btn btn-primary" onClick={this.handleClickUnBound}>Click</button>
                <button id="buttonClick" className="btn btn-primary" onClick={(true)?<div>a</div>:<div>b</div>}>Click</button>
                <button id="buttonShow" className="btn btn-success" onClick={()=> {
                    this.showMess("chau len ba");
                    this.showMess("chau len ba");
                }}>Show</button>
                <button id="buttonShow" className="btn btn-success" onClick={function() {
                    this.showMess("chau len ba");
                }}>Show</button>
            </div>
        )
    }
}
