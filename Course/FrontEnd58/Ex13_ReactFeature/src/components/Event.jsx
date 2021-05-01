import React, { Component } from 'react'

export default class Event extends Component {
    render() {
        return (
            <section className="event">
                <div className="event-content">
                    <h2>20% Discount on</h2>
                    <h1>TRENDING DESIGN</h1>
                    <div className="event-content-button">
                        <button>Shop now</button>
                        <button>Quick view</button>
                    </div>
                </div>
            </section>
        )
    }
}
