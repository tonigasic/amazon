import React from "react";
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

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
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>);
}

export default Checkout;