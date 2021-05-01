import React, { Component } from 'react'

export default class Databinding extends Component {
    name = "frontend58";

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: "Hai Nam"
        }
        return(
            <div>
                <p>Ma: {sinhVien.ma}</p>
                <p>Ma: {sinhVien.ten}</p>
            </div>
        );
    }

    renderInput = (name) => {
        return (
            <div>
                <p>{name}</p>
            </div>
        )
    }

    render() {
        let title = "Chu Hai Nam";
        let renderTitle = () => {
            return (
                <div>
                    {title}
                </div>
            )
        }
        return (
            <div className="container">
                <h1>Data Binding</h1>
                <p id="title" className="display-4">{renderTitle()}</p>
                <p>{this.name}</p>
                {this.renderSinhVien()}
                {this.renderInput("nam")}
            </div>
        )
    }
}
