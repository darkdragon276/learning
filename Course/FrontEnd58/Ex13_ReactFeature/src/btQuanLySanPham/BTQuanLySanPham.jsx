import _ from 'lodash'
import React, { Component } from 'react'
// import Popup from 'reactjs-popup'
import Cart from './Cart'
import SanPham from './SanPham'

export const DATA_PRODUCT = [
    {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    },

    {
        "maSP": 2,
        "tenSP": "Meizu 16Xs",
        "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
        "heDieuHanh": "Android 9.0 (Pie); Flyme",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 7600000,
        "hinhAnh": "./img/meizuphone.jpg"
    },

    {
        "maSP": 3,
        "tenSP": "Iphone XS Max",
        "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
        "heDieuHanh": "iOS 12",
        "cameraSau": "Chính 12 MP & Phụ 12 MP",
        "cameraTruoc": "7 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 27000000,
        "hinhAnh": "./img/applephone.jpg"
    }
]

const DEFAULT = {
    maSP: 1,
    item: {
        maSP: 1,
        soLuong: 0,
    },
}

export default class BTQuanLySanPham extends Component {

    state = {
        maSP: DEFAULT.maSP,
        cartList: [DEFAULT.item],
    }

    renderProductDetail = () => {
        let maSP = this.state.maSP;
        let item = DATA_PRODUCT.find((item) => item.maSP === maSP);
        return (
            <div className="row">
                <div className="col-5 text-center">
                    <h1>{item.tenSP}</h1>
                    <img src={item.hinhAnh} height={400} alt="" />
                </div>
                <div className="col-7">
                    <h1>Thong tin chi tiet</h1>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Man hinh</th>
                                <td>{item.manHinh}</td>
                            </tr>
                            <tr>
                                <th>He Dieu Hanh</th>
                                <td>{item.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <th>Camera Truoc</th>
                                <td>{item.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <td>{item.cameraSau}</td>
                            </tr>
                            <tr>
                                <th>Ram</th>
                                <td>{item.ram}</td>
                            </tr>
                            <tr>
                                <th>Rom</th>
                                <td>{item.rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    renderProductList = () => {
        return (
            DATA_PRODUCT.map((item, key) => {
                return (
                    <div className="col-4" key={key}>
                        {/* {this.renderProduct(item)} */}
                        <SanPham item={item} callback={{ detail: this.handleChiTietSanPham, add: this.handleThemSanPham }} ></SanPham>
                    </div>
                )
            })
        )
    }

    renderCartList = () => {
        let rows = this.state.cartList.map((item, index) => {
            return (
                <Cart key={index} callback={{ delete: this.handleXoaSamPham, increate: this.handleTangGiamSanPham }} item={{ ...DATA_PRODUCT[item.maSP - 1], soLuong: item.soLuong }}></Cart>
            )
        });
        return ((rows.length > 0) ?
            <div className="mt-5">
                <h3 className="text-right">Gio Hang</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma San Pham</th>
                            <th>Hinh Anh</th>
                            <th>Ten San Pham</th>
                            <th>So luong</th>
                            <th>Gia Ban</th>
                            <th>Thanh Tien</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
            : <div></div>
        )
    }

    handleChiTietSanPham = (maSP) => {
        this.setState({ maSP: maSP }, () => {
            console.log(this.state);
        })
        console.log(this.state);
    }

    handleTangGiamSanPham = (maSP, obset) => {
        console.log("handle TangGiam");
        let cartList = this.state.cartList;
        let index = cartList.findIndex(item => item.maSP === maSP);
        cartList[index].soLuong += obset;
        this.setState({ cartList }, () => {
            console.log(this.state);
        })
    }

    handleThemSanPham = (maSP) => {
        let cartList = this.state.cartList;
        let item = cartList.find((item => item.maSP === maSP));
        if (item === undefined) {
            cartList.push({ maSP: maSP, soLuong: 1 });
        } else if (item.soLuong < 1) {
            item.soLuong = 1;
        } else {
            item.soLuong++;
        }
        this.setState({ cartList }, () => {
            console.log(this.state);
        });
    }

    handleXoaSamPham = (maSP) => {
        let cartList = this.state.cartList;
        let item = cartList.find((item) => item.maSP === maSP);
        if (item !== undefined) {
            item.soLuong = 0;
            this.setState({ cartList }, () => {
                console.log(this.state);
            })
        }
        // console.log(item);
    }

    // handle(item) => {
    //     let cartList;
    //     let index = cartList.findIndex((element) => {
    //         return (element.maSP === item.maSP)   
    //     })

    // }

    render() {
        let cartList = this.state.cartList;
        _.sortBy(cartList, "maSP");
        _.remove(cartList, (item) => item.soLuong === 0);
        console.log(cartList);
        return (
            <div className="container">
                <h3 className="text-center display-4">Danh Sach San Pham</h3>
                {/* <Popup trigger={<button>Trigger</button>} position="right center"> */}
                {this.renderCartList()}
                {/* </Popup> */}
                <div className="row">
                    {this.renderProductList()}
                </div>
                <div className="m-5">
                    {this.renderProductDetail()}
                </div>
            </div>
        )
    }
}
