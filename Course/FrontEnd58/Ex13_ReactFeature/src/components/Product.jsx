import React, { Component } from 'react'

export default class Product extends Component {
    // property
    // background = "";
    // constructor(background) {
    //     background = background;
    // }
    // method
    render() {
        return (
            <section className="product background1">
                <h1 className="special">New Products</h1>
                <div className="product-content">
                    <div className="product-item">
                        <img src="./img/p13.jpg" alt="" />
                        <p className="product-item-head">My product is the best</p>
                        <p className="product-item-size">XL/XXL/S</p>
                        <p className="product-item-price"><span>$100.00</span> $70.00</p>
                        <button>Add to cart</button>
                    </div>
                    <div className="product-item">
                        <img src="./img/p22.jpg" alt="" />
                        <p className="product-item-head">My product is the best</p>
                        <p className="product-item-size">XL/XXL/S</p>
                        <p className="product-item-price"><span>$100.00</span> $70.00</p>
                        <button>Add to cart</button>
                    </div>
                    <div className="product-item">
                        <img src="./img/p9.jpg" alt="" />
                        <p className="product-item-head">My product is the best</p>
                        <p className="product-item-size">XL/XXL/S</p>
                        <p className="product-item-price"><span>$100.00</span> $70.00</p>
                        <button>Add to cart</button>
                    </div>
                    <div className="product-item">
                        <img src="./img/p16.jpg" alt="" />
                        <p className="product-item-head">My product is the best</p>
                        <p className="product-item-size">XL/XXL/S</p>
                        <p className="product-item-price"><span>$100.00</span> $70.00</p>
                        <button>Add to cart</button>
                    </div>
                </div>
            </section>

        )
    }
}
