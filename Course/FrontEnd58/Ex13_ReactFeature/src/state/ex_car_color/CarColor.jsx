import React, { Component } from 'react'

const CARS = {
    Black: "./img/imgBlackCar.jpg",
    Red: "./img/imgRedCar.jpg",
    Silver: "./img/imgSilverCar.jpg"
};

const DEFAUT = {
    key: "Black",
}

export default class CarColor extends Component {
    state = {
        key: DEFAUT.key,
    }

    setImagePathByColor = (color) => {
        this.setState({key: color}, ()=>{
            console.log(this.state);
        });
    }

    getImagePath = () => {
        return CARS[this.state.key];
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h1>Chon mau sac xe</h1>
                        <img src={this.getImagePath()} alt=""/>
                    </div>
                    <div className="col-6">
                        <button type="button" className="btn btn-dark mr-5" onClick={()=>{
                            this.setImagePathByColor("Black");
                        }}>Black</button>
                        <button type="button" className="btn btn-danger mr-5" onClick={()=>{
                            this.setImagePathByColor("Red");
                        }}>Red</button>
                        <button type="button" className="btn btn-secondary mr-5" onClick={()=>{
                            this.setImagePathByColor("Silver");
                        }}>Silver</button>
                    </div>
                </div>
            </div>
        )
    }
}
