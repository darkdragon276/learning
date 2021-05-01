import React, { Component } from 'react'

export default class StateDemo extends Component {
    state = {
        isLogin:false,
    } /* available in Component */
    userName = "darkdragon276";

    renderLogin = () => {
        let content;
        if (this.state.isLogin) {
            content = <span className="nav-link">Hello {this.userName}</span>
        } else {
            content = <button className="btn btn-dark" onClick={this.dangNhap}>Dang Nhap</button>
        }
        return content;
    }

    dangNhap = () => {
        // this.state.isLogin = true;
        let newState = {
            isLogin:true,
        }
        // asynchronus
        this.setState({isLogin:true}, ()=>{
            console.log("state", this.state);
        });
        console.log("state", this.state);
    }

    render() {
        return (
            <div className="container">
                <h1>State Demo</h1>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <div className="nav-item bg-dark text-light">{
                                // (this.isLogin)? 
                                // <span className="nav-link">Hello {this.userName}</span> : 
                                // <button className="btn btn-dark">Dang Nhap</button>
                                this.renderLogin()
                            }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
