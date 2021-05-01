import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { datVeAction, layThongTinLichChieuAction } from '../../redux/actions/LichChieuActions';
import { USERLOGIN } from '../../util/setting';
import './DatVe.css'

export default function DatVe(props) {

    //Lấy state lịch chiếu từ reducer
    const { lichChieu, danhSachGheDangDat } = useSelector(state => state.LichChieuReducer);
    const dispatch = useDispatch();
    console.log('lichChieu', lichChieu);

    useEffect(() => {
        const action = layThongTinLichChieuAction(props.match.params.maLichChieu);

        dispatch(action);

    }, [])

    const renderGhe = () => {
        return lichChieu.danhSachGhe?.map((ghe, index) => {


            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
            let classGheDangDat = '';
            if (indexGheDD !== -1) {
                classGheDangDat = 'gheDangDat';
            }
            let classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            return <Fragment>
                <button onClick={() => {
                    dispatch({
                        type: 'DAT_GHE',
                        gheDangDat: ghe
                    })
                }} disabled={ghe.daDat} className={`text-center ghe  ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}>
                    {ghe.daDat ? 'X' : ghe.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 mt-5 text-center">
                    <img src="https://tix.vn/app/assets/img/icons/screen.png" />

                    <div>
                        {renderGhe()}
                    </div>


                </div>

                <div className="col-4 mt-5">
                    <h1 className="text-success display-4">0 đ</h1>
                    <hr />
                    <h3 className="text-danger">{lichChieu.thongTinPhim?.tenPhim}</h3>

                    <p>Địa điểm: {lichChieu.thongTinPhim?.diaChi}</p>
                    <p>Cụm rạp: {lichChieu.thongTinPhim?.tenCumRap}</p>
                    <p>Rạp: {lichChieu.thongTinPhim?.tenRap}</p>
                    <hr />
                    <div>
                        <p className="text-danger">Ghế</p>
                        {danhSachGheDangDat.map((gheDD, index) => {
                            return <span style={{ fontSize: '25px' }} key={index} className="mr-2">{gheDD.stt}</span>
                        })}

                        <p className="text-success" style={{ fontSize: '25px' }}>
                            {danhSachGheDangDat.reduce((tongTien, gheDD, index) => {
                                return tongTien += gheDD.giaVe;
                            }, 0).toLocaleString()}
                        </p>
                    </div>

                    <button onClick={() => {

                        let userLogin = JSON.parse(localStorage.getItem(USERLOGIN));
                        //Dữ liệu tổng hợp đúng định dạng backend yêu cầu
                        let objectApi = {
                            "maLichChieu": props.match.params.maLichChieu,
                            "danhSachVe": danhSachGheDangDat,
                            "taiKhoanNguoiDung": userLogin.taiKhoan
                        }

                        const action = datVeAction(objectApi);
                        //Dispatch action api
                        dispatch(action);


                    }} className="btn btn-success w-100">
                        <span className="w-100 p-5" style={{ fontSize: 17 }} >ĐẶT VÉ</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
