import axios from 'axios';
import { TOKEN, USERLOGIN } from '../../util/setting';
import {history} from '../../App'
import { DANG_NHAP } from './type/NguoiDungType';



export const dangNhapAction = (userLogin) => { //userLogin : {taiKhoan:'',matKhau:''}

    return async (dispatch) => {


        try {
            const result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                method:'POST',
                data: userLogin //{taiKhoan:'',matKhau:''}
            });

            console.log('result',result.data)
            //123@admin
            //148

            dispatch({
                type:DANG_NHAP,
                taiKhoan:result.data.taiKhoan
            })

            localStorage.setItem(TOKEN,result.data.accessToken);
            
            localStorage.setItem(USERLOGIN, JSON.stringify(result.data))

            // props.history.push()
            history.push('/');


        }catch (errors) {
            console.log('errors',errors.response.data)
        }
    }
}