import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        let { item, callback } = this.props;
        if (item.soLuong < 1) {
            return null;
        }
        return (
            <tr>
                <td>{item.maSP}</td>
                <td><img src={item.hinhAnh} height={50} alt="" /></td>
                <td>{item.tenSP}</td>
                <td>
                    <button onClick={() => {
                        callback.increate(item.maSP, -1);
                    }} className="btn btn-primary">-</button>
                    <span className="mx-2">{item.soLuong}</span>
                    <button onClick={() => {
                        callback.increate(item.maSP, 1);
                    }
                    } className="btn btn-primary">+</button>
                </td>
                <td>{item.giaBan}</td>
                <td>{item.soLuong * item.giaBan}</td>
                <td><button onClick={() => {
                    callback.delete(item.maSP);
                }} className="btn-danger btn">Xoa</button></td>
            </tr>
        )
    }
}
