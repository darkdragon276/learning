import React, { Component } from 'react'

export default class SanPham extends Component {
    
    render() {
        let {item, callback} = this.props;
        return (
            <div className="card text-dark bg-light">
                <img className="card-img-top" src={item.hinhAnh} alt="" height="300px" />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-success" onClick={() => {
                                callback.detail(item.maSP);
                            }}>Xem Chi Tiet</button>
                        </div>
                        <div className="col-6">
                            <button className="btn-danger btn" onClick={()=>{
                                callback.add(item.maSP);
                            }} >Them San Pham</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
