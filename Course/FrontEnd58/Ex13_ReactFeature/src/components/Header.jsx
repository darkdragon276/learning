import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <p>Help <span><i className="fa fa-mobile" /></span> 01634640124</p>
            </div>
            <div className="header-right">
                <ul>
                    <li>
                        <a href="#">Checkout</a>
                    </li>
                    <li>
                        <a href>Login</a>
                    </li>
                    <li>
                        <a href>Account</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}
