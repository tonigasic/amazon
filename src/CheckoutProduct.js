import React from "react";
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating, hideRemoveButton, quantity}) {
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {quantity ? <small className="checkoutProduct__quantity">{quantity + 'X '}</small> : ''}
                    {title}
                </p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐</p>
                    ))}
                </div>
                { !hideRemoveButton &&
                (
                    <button onClick={removeFromBasket}>Remove from basket</button>
                )
                }

            </div>
        </div>
    )
}

export default CheckoutProduct;