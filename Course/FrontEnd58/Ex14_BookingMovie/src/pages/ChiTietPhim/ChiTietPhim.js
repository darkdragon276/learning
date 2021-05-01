import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { layChiTietPhimApiAction } from '../../redux/actions/QuanLyPhimActions';
import MenuRap from './MenuRap/MenuRap';


export default function ChiTietPhim(props) {
    
    const {chiTietPhim} = useSelector(state=>state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    const maPhim = props.match.params.maPhim; //props(history,match,location) => 3 thuộc khi component được load ra từ thẻ route, các thuộc tính giúp tương tác với thanh điều hướng trang


    console.log('chiTietPhim',chiTietPhim);

    useEffect(()=>{
        // console.log('maPhim',maPhim)
        //Call api
        dispatch(layChiTietPhimApiAction(maPhim))
        

    },[])

    return (
        <div className="container mt-5">
           <div className="row">
               <div className="col-4">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} className="w-100"/>
               </div>
               <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên phim </th>
                                <th>{chiTietPhim.tenPhim} </th>
                            </tr>
                            <tr>
                                <th>Mô tả </th>
                                <th>{chiTietPhim.moTa}  </th>
                            </tr>
                          
                        </thead>
                    </table>
               </div>
           </div>
           <div>
               <MenuRap heThongRapChieu={chiTietPhim.heThongRapChieu}/>
           </div>
        </div>
    )
}
