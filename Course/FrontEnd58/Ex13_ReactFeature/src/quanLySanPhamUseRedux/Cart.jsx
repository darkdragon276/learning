import _ from 'lodash';
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Cart extends Component {

    renderCartList = () => {
        let { productList, increate, decreate, del } = this.props;

        let rows = productList.map((item, index) => {
            if (item.soLuong < 1 || item.soLuong == null) {
                return null;
            }
            return (
                <tr>
                    <td>{item.maSP}</td>
                    <td><img src={item.hinhAnh} height={50} alt="" /></td>
                    <td>{item.tenSP}</td>
                    <td>
                        <button onClick={() => {
                            decreate(item.maSP);
                        }} className="btn btn-primary">-</button>
                        <span className="mx-2">{item.soLuong}</span>
                        <button onClick={() => {
                            increate(item.maSP);
                        }
                        } className="btn btn-primary">+</button>
                    </td>
                    <td>{item.giaBan}</td>
                    <td>{item.soLuong * item.giaBan}</td>
                    <td><button onClick={() => {
                        del(item.maSP);
                    }} className="btn-danger btn">Xoa</button></td>
                </tr>)
        });

        console.log(rows);
        _.remove(rows, (item) => item == null);
        _.sortBy(rows, "maSP");

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

    render() {
        return (
            <div>
                {this.renderCartList()}
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        increate: (maSP) => {
            dispatch({ type: "INCREATE", maSP:maSP });
        },
        decreate: (maSP) => {
            dispatch({ type: "DECREATE", maSP:maSP });
        },
        del: (maSP) => {
            dispatch({ type: "DELETE", maSP:maSP });
        }
    }
}

const mapStateToProps = (store) => {
    return {
        productList: store.detail.productList,
        maSP: store.detail.maSP,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

