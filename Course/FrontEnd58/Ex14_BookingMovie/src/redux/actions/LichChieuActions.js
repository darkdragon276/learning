import axios from 'axios'
import { TOKEN } from '../../util/setting';


export const layThongTinLichChieuAction = (maLichChieu) => {
    // fetch
    return async dispatch => {
        try {
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            });
            console.log('object',result.data)
            //Lấy dữ liệu từ api => dispatch lên reducer
            dispatch({
                type: 'SET_LICH_CHIEU',
                lichChieu: result.data
            })
        } catch (errors) {
            console.log('errors', errors.response.data)
        }

    }




}


export const datVeAction = (thongTinDatVe) => {

    return async (dispatch) => {

        try{

            const result  = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe', //be cung cấp
                method:'POST',//be cung cấp
                data:thongTinDatVe,//be cung cấp
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });

            if(result.status === 200) {
                alert(result.data);
                window.location.reload();
            }
            

        }catch(errors) {
            console.log('errors',errors.response?.data)

        }

    }
}