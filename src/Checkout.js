import React from "react";
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";

function Checkout() {
    const [{basket, user}] = useStateValue();

    console.log(basket)

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://demos.famethemes.com/easymag/wp-content/uploads/sites/34/2015/12/wide-ads.png"
                    alt=""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {basket.map((item, index) => (
                        <CheckoutProduct
                            key={index}
                            id={item.id}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            title={item.title}
                            quantity={item?.quantity}
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