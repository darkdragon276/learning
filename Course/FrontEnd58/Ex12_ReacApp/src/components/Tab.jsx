import React, { Component } from 'react'

export default class Tab extends Component {
    render() {
        return (
            <section className="tab">
                <h1>New Shop</h1>
                <div className="tab-list">
                    <ul>
                        <li>
                            <a href>Home</a>
                        </li>
                        <li>
                            <a href>Woman</a>
                        </li>
                        <li>
                            <a href>Man</a>
                        </li>
                        <li>
                            <a href>Short Code</a>
                        </li>
                        <li>
                            <a href>Mail Us</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-cart">
                    <p>$0.00 (0 items) <span><i className="fa fa-shopping-cart" /></span>
                    </p>
                    <p>Empty Cart</p>
                </div>
            </section>

        )
    }
}
