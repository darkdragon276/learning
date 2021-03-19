import React, { Component } from 'react'
export default class Trend extends Component {
    render() {
        return (
            <section className="trend">
                <h1 className="special">Latest Fashion Trend</h1>
                <div className="trend-content">
                    <div className="trend-item">
                        <img src="./img/l1.jpg" alt />
                        <p className="trend-item-sexual">Men</p>
                        <p className="trend-item-selloff">50%</p>
                    </div>
                    <div className="trend-item">
                        <img src="./img/l2.jpg" alt />
                        <p className="trend-item-sexual">Men</p>
                        <p className="trend-item-selloff">50%</p>
                    </div>
                    <div className="trend-item">
                        <img src="./img/l3.jpg" alt />
                        <p className="trend-item-sexual">Men</p>
                        <p className="trend-item-selloff">50%</p>
                    </div>
                    <div className="trend-item">
                        <img src="./img/l4.jpg" alt />
                        <p className="trend-item-sexual">Men</p>
                        <p className="trend-item-selloff">50%</p>
                    </div>
                    <div className="trend-item">
                        <img src="./img/l5.jpg" alt />
                        <p className="trend-item-sexual">Men</p>
                        <p className="trend-item-selloff">50%</p>
                    </div>
                    <div className="trend-item">
                        <img src="./img/l6.jpg" alt />
                        <p className="trend-item-sexual">Men</p>
                        <p className="trend-item-selloff">50%</p>
                    </div>
                </div>
            </section>

        )
    }
}
