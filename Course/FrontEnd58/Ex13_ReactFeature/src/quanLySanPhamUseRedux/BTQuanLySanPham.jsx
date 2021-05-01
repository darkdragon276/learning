import React, { Component } from 'react'
// import Popup from 'reactjs-popup'
import Cart from './Cart'
import SanPham from './SanPham'

export default class BTQuanLySanPham extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4">Danh Sach San Pham</h3>
                {/* <Popup trigger={<button>Trigger</button>} position="right center"> */}
                {/* {this.renderCartList()} */}
                {/* </Popup> */}
                <Cart></Cart>
                <SanPham></SanPham>
            </div>
        )
    }
}
