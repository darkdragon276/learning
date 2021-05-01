import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dangNhapAction } from '../../redux/actions/NguoiDungActions';
import {useDispatch} from 'react-redux'
import { USERLOGIN } from '../../util/setting';
import { Redirect } from 'react-router';
export default function DangNhap(props) {
    //const {handleChange,handleSubmit,}
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema:  Yup.object().shape({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống !'),
            // matKhau:Yup.string().required('Mật khẩu không được bỏ trống!').min(6,'Mật khẩu tối thiểu 6 ký tự').max(32,'Mật khẩu tối đa 32 ký tự!')
        }),
        onSubmit: values => {
            //Hàm này gọi sẽ trả về async function
            const action = dangNhapAction(values);

            dispatch(action);
        },
    });

    if(localStorage.getItem(USERLOGIN)) {
        alert('Bạn đã đăng nhập thành công !');
        return <Redirect to="/" />
    }

    return (
        <form className="container" onSubmit={formik.handleSubmit}>
            <h3>Đăng nhập</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={formik.handleChange} />
                <p className="text-danger">{formik.errors.taiKhoan}</p>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={formik.handleChange}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success">Đăng nhập</button>
            </div>
        </form>
    )
}
