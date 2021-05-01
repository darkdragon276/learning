import logo from './logo.svg';
import { Route, BrowserRouter, Switch, Router } from 'react-router-dom'
import TrangChu from './pages/TrangChu/TrangChu';
import DangKy from './pages/DangKy/DangKy';
import DangNhap from './pages/DangNhap/DangNhap';
import Header from './components/Header/Header';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/Hooks/UseEffectDemo/UseEffectDemo';
import ApiDemoClass from './pages/ApiDemo/ApiDemoClass';
import ApiDemoFunction from './pages/ApiDemo/ApiDemoFunction';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';


//Cấu hình thư viện điều hướng trang
import { createBrowserHistory } from 'history'
import { Fragment } from 'react';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import DatVe from './pages/DatVe/DatVe';
export const history = createBrowserHistory();


function App() {
  return (
    <Router history={history}>
      <div className="App">

        <Switch>
          <HomeTemplate path="/trangchu" component={TrangChu} />

          <UserTemplate path="/dangky" exact component={DangKy} />
          <UserTemplate path="/dangNhap" exact component={DangNhap} />


          <HomeTemplate path="/chitietphim/:maPhim" component={ChiTietPhim}/>

          <HomeTemplate path="/usestatedemo" exact component={UseStateDemo} />
          <HomeTemplate path="/useeffectdemo" exact component={UseEffectDemo} />
          <HomeTemplate path="/apiclass" exact component={ApiDemoClass} />
          <HomeTemplate path="/apifunc" exact component={ApiDemoFunction} />
          <Route path="/datve/:maLichChieu" exact component={DatVe} />

          
          <HomeTemplate path="/" exact component={TrangChu} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
