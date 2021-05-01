import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { action, callApi_layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimActions';
export default function ApiDemoFunction(props) {

    const { mangPhim } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    // const [mangPhim, setMangPhim] = useState([]);

    useEffect(async () => {
        //componentdidmout
        // try {
        // let result = await axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // });

        // dispatch({type:'SET_MANG_PHIM',mangPhim:result.data})

        //dispatch action là function để function xử lý dữ liệu trước khi đưa lên reducer
        dispatch(action);

        // } catch (errors) {
        //     console.log('errors', errors)
        // }
    }, [])
    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <h3 className="display-4 text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
