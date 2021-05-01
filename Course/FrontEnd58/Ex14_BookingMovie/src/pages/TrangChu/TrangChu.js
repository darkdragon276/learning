import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { callApi_layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';

export default function TrangChu(props) {

    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();


    useEffect(() => {
        //Dispatch lên 1 action async đã được xây dựng sẵn 
        dispatch(callApi_layDanhSachPhimAction());
    }, []);
    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <NavLink to={`/chiTietPhim/${phim.maPhim}`} className="btn btn-success">Đặt vé</NavLink>
                    </div>
                </div>

            </div>
        })
    }
    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         mangPhim:state.QuanLyPhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps)(TrangChu);