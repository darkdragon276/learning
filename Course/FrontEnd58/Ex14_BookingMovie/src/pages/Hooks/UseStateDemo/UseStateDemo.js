import React, { useState } from 'react'

export default function UseStateDemo(props) {

    const [state, setState] = useState({ number: 1 });
    /*
           class tương ứng
           this.state = {number: 1}
    */
    const [number, setNumber] = useState(1);
    /*
             class tương ứng
             this.state = 1
    */

    return (
        <div className="container">
            <h3>{number}</h3>
            <button onClick={() => {

                setNumber(number + 1);

            }}>+</button>

        </div>
    )
}
