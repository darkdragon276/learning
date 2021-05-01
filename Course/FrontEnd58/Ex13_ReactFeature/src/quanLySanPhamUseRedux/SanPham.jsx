import React, { Component } from 'react'
import { connect } from 'react-redux';

class SanPham extends Component {

    renderProductList = () => {
        let { productList, showDetail, addProduct } = this.props;
        return (productList.map((item, key) => {
            return (
                <div className="col-4" key={key}>
                    <div className="card text-dark bg-light">
                        <img className="card-img-top" src={item.hinhAnh} alt="" height="300px" />
                        <div className="card-body">
                            <h4 className="card-title">{item.tenSP}</h4>
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-success" onClick={() => {
                                        // callback.detail(item.maSP);
                                        showDetail(item.maSP);
                                    }}>Xem Chi Tiet</button>
                                </div>
                                <div className="col-6">
                                    <button className="btn-danger btn" onClick={() => {
                                        // callback.add(item.maSP);
                                        addProduct(item.maSP);
                                    }} >Them San Pham</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        )
    }

    renderProductDetail = () => {
        let { maSP, productList } = this.props;
        console.log(maSP);
        console.log(productList);
        let item = productList.find((item) => item.maSP === maSP);
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

    render() {
        console.log(this.props.item);
        return (
            [<div className="row">
                {this.renderProductList()}
            </div>,
            <div className="m-5">
                {this.renderProductDetail()}
            </div>]
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showDetail: (maSP) => {
            dispatch({ type: "DETAIL", maSP: maSP })
        },
        addProduct: (maSP) => {
            dispatch({type: "NEW_PRODUCT", maSP: maSP})
        }
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        productList: store.detail.productList,
        maSP: store.detail.maSP,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SanPham);

