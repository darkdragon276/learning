import React, { Component } from 'react'
import Element from './Element';

const DATA = [
    { id: 1, productName: "Iphone", price: 1000, img: "https://picsum.photos/200/300?random=1" },
    { id: 2, productName: "Iphone X", price: 2000, img: "https://picsum.photos/200/300?random=2" },
    { id: 3, productName: "Iphone XS", price: 3000, img: "https://picsum.photos/200/300?random=3" },
]

export default class Loop extends Component {


    renderProduct = () => {

        let arr = DATA.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card text-white bg-primary">
                        <img className="card-img-top" src={item.img} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">{item.productName}</h4>
                            <p className="card-text">{item.price}</p>
                        </div>
                    </div>
                </div>
            );
        });
        // for (let i = 0; i < DATA.length; i++) {
        //     const object = DATA[i];
        //     let content = 
        //     <div className="col-4" key={i}>
        //         <div className="card text-white bg-primary">
        //             <img className="card-img-top" src={object.img} alt />
        //             <div className="card-body">
        //                 <h4 className="card-title">{object.productName}</h4>
        //                 <p className="card-text">{object.price}</p>
        //             </div>
        //         </div>
        //     </div>;
        //     arr.push(content);
        // }
        return arr;
    }

    // renderTableProduct = () => {
    //     return DATA.map((item, index) => {
    //         return <tr key={index}>
    //             <td>{item.id}</td>
    //             <td><img src={item.img} alt={item.productName} width={50} /></td>
    //             <td>{item.productName}</td>
    //             <td>{item.price}</td>
    //             <td><button className="btn btn-danger">Delete</button></td>
    //         </tr>
    //     })
    // }

    render() {
        return (
            <div className="container">
                <h3 className="text-center display-4">Product List</h3>
                <div className="row">
                    <Element item={DATA[0]}></Element>
                    <Element item={DATA[1]}></Element>
                    <Element item={DATA[2]}></Element>
                </div>
                <div className="row">
                    <table class="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
