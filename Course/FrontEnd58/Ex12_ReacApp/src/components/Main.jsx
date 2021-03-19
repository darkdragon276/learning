import React, { Component } from 'react'
import Carousel from './Carousel'
import Event from './Event'
import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import Intro from './Intro'
import Product from './Product'
import Tab from './Tab'
import Trend from './Trend'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Tab></Tab>
                <Carousel></Carousel>
                <Intro></Intro>
                <Product></Product>
                <Event></Event>
                <Product></Product>
                <Trend></Trend>
                <Info></Info>
                <Footer></Footer>
            </div>
        )
    }
}
