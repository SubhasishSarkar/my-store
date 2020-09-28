import React, { Component } from 'react'
import { Route, Router } from 'react-router-dom';
import Title from './Title';
import {storeProducts} from '../data' 
export default class Product extends Component {
    state={
        products: storeProducts
    };
    render() {
        console.log(this.state.products)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
