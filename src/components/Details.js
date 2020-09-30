import React, { Component } from 'react';
import {ProductConsumer} from '../context'; 
export default class Details extends Component {
    render() {
        const id = this.props.location.id;
        return (
            <div>
                <ProductConsumer>
                {(value)=>{
                    console.log(value);
                    return value.products.map(p=>{
                        if(p.id === id){
                            return (
                                <div className="conatiner">
                                    <img src={p.img}/>
                                    <div>{p.title}</div>
                                    <div>{p.price}</div>
                                    <div>{p.company}</div>
                                    <div>{p.info}</div>
                                </div>
                            )
                        }
                    });
                }}                       
                </ProductConsumer>
            </div>
        )
    }
}
