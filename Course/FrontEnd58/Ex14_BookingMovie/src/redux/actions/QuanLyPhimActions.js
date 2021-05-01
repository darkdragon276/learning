

import axios from 'axios';
//thư viện điều thanh url 
import {history} from '../../App';
import { DOMAIN } from '../../util/setting';

export const callApi_layDanhSachPhimAction = () => {
    //Xử lý
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `${DOMAIN}/api/quanlyphim/LayDanhSachPhim?maNhom=GP01`,
                method: 'GET'
            });
            dispatch({ type: 'SET_MANG_PHIM', mangPhim: result.data })
        } catch (errors) {
            console.log(errors)
        }
    }
}


export const action = async (dispatch) => {
    try {
        let result = await axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method: 'GET'
        });
        //Sau khi có dữ liệu => gửi dữ liệu lên reducer
        dispatch({ type: 'SET_MANG_PHIM', mangPhim: result.data });
        // dispatch()
    } catch (errors) {
        console.log(errors)
    }
}

export const layChiTietPhimApiAction = (maPhim) => {

    return async dispatch => {
        try {
            const result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'GET'
            });
        //Sau khi có dữ liệu từ api sử dụng hàm dispatch từ redux thunk để đưa dữ liệu lên reducer
        dispatch({
            type:'SET_CHI_TIET_PHIM',
            chiTietPhim: result.data
        })
        }catch(errors) {
            if(errors.response.status === 400) {
                alert('Tham số không hợp lệ !');
                //Nếu không tìm thấy data => về home
                history.push('/home');
            }
            // console.log('errors',errors.response.status)
        }

    }
}

//action loại 1: object
// let action = {
//     type:'',
//     data:'123'
// }
//action loại 2: function (callback function) closure function
// let action = (thamSo) => {

//    return function(dispatch) {

//         //Xử lý => 
//         thamSo
//         //Sau khi xử lý xong => dispatch reducer
//         dispatch({})
//     }
// }


// dispatch(action('123'))