import React, { useMemo, useRef, useState } from 'react'
import EffectChild from './EffectChild'

export default function EffectParrent(props) {

    const [state, setState] = useState({render: true})
    
    // static
    const time = useRef({
        tick: 1,
        count: 2,
    })

    const handleOnClick = () => {
        setState({render: false})
        time.current = {}
    }



    const callBack = useMemo(() => ({
        handleOnClick:handleOnClick,
        // ...
    }), [])

    const value = useMemo(() => ({
        time,
        // ...
    }), [])

    return (
        <div>
            <button className="btn btn-success" onClick={handleOnClick}>Xoa</button>
            {/* {state.render?<EffectChild></EffectChild>:null} */}
            {state.render?<EffectChild callBack={callBack} value= {value}></EffectChild>:null}
        </div>
    )
}
