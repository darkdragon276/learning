import React from 'react'
import { NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { TOKEN, USERLOGIN } from '../../util/setting';
export default function Header() {

    const {taiKhoan} = useSelector(state => state.NguoiDungReducer);


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink activeClassName="active text-danger" activeStyle={{ background: '#fff', color: 'black' }} className="nav-link" to="/trangchu">Trang chủ</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active text-danger" activeStyle={{ background: '#fff', color: 'black' }} className="nav-link" to="/dangky">Đăng ký</NavLink>
                    </li>
                    <li className="nav-item">
                        {localStorage.getItem(USERLOGIN) ?  <button  onClick={()=>{
                            localStorage.removeItem(USERLOGIN);
                            localStorage.removeItem(TOKEN);
                            window.location.reload();
                        }} className="nav-link text-danger" >Đăng xuất</button>: ''}
                       
                    </li>
                    <li className="nav-item dropdown">
                        {taiKhoan.trim() !=='' ? <NavLink to="/" className="nav-link">{taiKhoan}</NavLink> : <NavLink activeStyle={{ background: '#fff', color: 'black' }} activeClassName="active text-danger" className="nav-link" to="/dangnhap">Đăng nhập</NavLink>  }
                        
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/usestatedemo">Usestate demo</NavLink>
                            <NavLink className="dropdown-item" to="/useeffectdemo">UseEffect demo</NavLink>
                            <NavLink className="dropdown-item" to="/apiclass">Api Class demo</NavLink>
                            <NavLink className="dropdown-item" to="/apifunc">Api func demo</NavLink>
                        </div>
                    </li>

                </ul>

            </div>
        </nav>

    )
}

