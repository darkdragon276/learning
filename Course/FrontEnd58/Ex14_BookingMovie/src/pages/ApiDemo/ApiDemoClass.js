import React, { Component } from 'react'
import axios from 'axios';
export default class ApiDemoClass extends Component {

    state = {
        mangPhim: []
    }

    renderPhim = () => {
        return this.state.mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                    </div>
                </div>
            </div>
        });
    }

    layDanhSachPhim = async  () => {

        try{
            //Call api
            let result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'
            });
            //Set state
            this.setState({
                mangPhim:result.data
            })
    
        }catch(errors) {
            console.log('errors',errors);
        }
      




        // let promise = axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // });
        // //Xử lý thành công
        // promise.then((result) => {
        //     console.log('result', result.data);
        //     //setState sau khi lấy dữ liệu từ api về
        //     this.setState({
        //         mangPhim: result.data
        //     });
        //     console.log('1');
        // })
        // //Xử lý thất bại
        // promise.catch((errors) => {

        // });

        // console.log('2')
    }
    render() {
        return (
            <div className="container">
                {/* <button onClick={() => {
                    this.layDanhSachPhim()
                }}>Lấy danh sách phim</button> */}
                <h3 className="text-center display-4">Danh sách phim</h3>
                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.layDanhSachPhim();
    }
}
