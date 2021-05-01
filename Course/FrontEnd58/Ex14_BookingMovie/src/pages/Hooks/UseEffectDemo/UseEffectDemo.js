import React, { useEffect,useState } from 'react'

export default function UseEffectDemo() {
   
    const [number,setNumber] = useState(1);
    const [name,setName] = useState('cybersoft');
    useEffect(() => {
        console.log('componentDidMount');
        //Hàm sẽ thực thi sau khi giao diện render (thường gọi ajax, hoặc chèn thư viện thứ 3 vào)
        return () => {
            //Hàm này sẽ thực thi trước khi component mất đi khỏi giao diện
            console.log('componentWilUnMount');
        }
    }, []);

    // useEffect(() => {
    //     console.log('componentDidMount & componentDidUpdate');
    // })

    useEffect(() => {
        console.log('componentDidUpdate');
        //Có thể set lại các state khác trừ number
    },[number]) //Khi number thay đổi thì hàm sẽ được gọi lại


    return (
        <div className="container">
            <h1>{number}</h1>
            <button className="btn btn-success" onClick={()=>{
                setNumber(number+1);
            }}>+</button>
            <hr />
            <h1>{name}</h1>
            <button className="btn btn-success" onClick={()=>{
                setName('frontend 58')
            }}>Set name</button>
        </div>
    )
}
