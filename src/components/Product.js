import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Product extends Component {
    
    render() { 
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <div className="row">
                <div className="container">
                    <div className="card">
                        <div className="img-container p-5" onClick={console.log('clicked')}>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{console.log('added to cart')}}>
                                {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<span className="material-icons">shopping_cart</span>)}
                            </button>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">
                                {title}
                            </p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">${price}</span>
                            </h5> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
