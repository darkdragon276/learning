import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        return (
            <section className="info">
                <div className="info-content">
                    <h2>About Us</h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Exercitationem praesentium odit perspiciatis assumenda nemo ex id
                    veritatis sit possimus quas, aliquam, rerum eaque sint labore libero
                    voluptatem. Omnis, maiores quisquam.
                </div>
                <div className="info-list">
                    <h2>My Account</h2>
                    <ul>
                        <li>
                            <a href>Check out</a>
                        </li>
                        <li>
                            <a href>Login</a>
                        </li>
                        <li>
                            <a href>Create Account</a>
                        </li>
                    </ul>
                </div>
                <div className="info-list">
                    <h2>Information</h2>
                    <ul>
                        <li>
                            <a href>Home</a>
                        </li>
                        <li>
                            <a href>Products</a>
                        </li>
                        <li>
                            <a href>Short codes</a>
                        </li>
                        <li>
                            <a href>Mail us</a>
                        </li>
                    </ul>
                </div>
                <div className="info-content">
                    <h2>Contact</h2>
                    <p><span><i className="fa fa-map-marker" /></span> 296 Võ Thành
      Trang</p>
                    <p><span><i className="fa fa-phone" /></span> 01634643124</p>
                    <p><span><i className="fa fa-envelope" /></span>
      Dangtrunghieu@gmail.com</p>
                </div>
            </section>

        )
    }
}
