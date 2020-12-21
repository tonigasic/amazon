import React from "react";
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://demos.famethemes.com/easymag/wp-content/uploads/sites/34/2015/12/wide-ads.png"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>);
}

export default Checkout;