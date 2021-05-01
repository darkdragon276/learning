import React, { memo, useEffect, useState } from 'react'

function EffectChild(props) {

    const [state, setstate] = useState({number: 1})

    useEffect(() => {
        console.log("in Component DidMount")
        return () => {
            console.log("in Component will unmount")
        }
    }, [])

    useEffect(() => {
        console.log("in Component DidUpdate")
    }, [state])

    console.log(props)
    const {callBack:{handleOnClick}, value:{time}} = props

    console.log("in EffectChild")

    return (
        <div>
            <button className="btn btn-danger" onClick={() => {
                setstate({number: state.number ++})
            }}>+</button>
            <p>Child + {state.number}</p>
            <button type="button" className="btn btn-primary" onClick={handleOnClick}>XoaChild</button>
            <p>time.tick {time.tick}</p>
            <p>time.count {time.count}</p>
        </div>
    )
}

export default memo(EffectChild)

