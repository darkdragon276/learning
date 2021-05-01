import React, { Component } from 'react'

export default class Element extends Component {
    render() {
        let { item } = this.props;

        return (
            <div className="col-4" key={item.id}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={item.img} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{item.productName}</h4>
                        <p className="card-text">{item.price}</p>
                    </div>
                </div>
            </div>
        )
    }
}
