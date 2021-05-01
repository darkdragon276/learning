import React, { Component } from 'react'
//Cách 1 import css đường dẫn (Phạm vi ảnh hưởng tất cả component trong ứng dụng)
import './Styles1.css'
import style from './Styles.module.css';
import { Button } from './components/Button';
import { Link, StyledLink } from './components/Link';

export default class StylesComponent extends Component {
    render() {
        return (
            <div className="container">
                <p className="text-red">Hello cybersoft</p>

                <div className={`p-5 ${style.textGreen} ${style['background-black']} display-4`}>
                    ahihi
                </div>
                <Button className="btn btn-success">Nam</Button>
                <Link>Link<p>plink</p></Link>
                <StyledLink>Ahihi<p>stylelink</p></StyledLink>
                <p style={{ backgroundColor: 'black', padding: '15px', color: 'white', marginTop: '5px' }}>hello front end 58</p>
            </div>
        )
    }
}
