import React, {useEffect} from 'react';
import './Home.css'
import Product from './Product';
import {db} from "./firebase";
import {useStateValue} from "./StateProvider";

function Home() {
    const [{products}, dispatch] = useStateValue();

    useEffect(()  => {
        let docs = [];
        let tempProducts;
        db
            .collection('products')
            .onSnapshot((snapshot) => {
                docs = snapshot.docs.sort( () => .5 - Math.random() );
                tempProducts = docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
                dispatch({
                    type: 'SET_PRODUCTS',
                    products: tempProducts
                })
                dispatch({
                    type: 'SET_ALL_PRODUCTS',
                    products: tempProducts
                })
            })
    }, []);

    const getProductsHtml = () => {
        let temparray = [];
        let chunk = 3;
        let html = [];
        for (let i=0,j=products.length; i<j; i+=chunk) {
            temparray = products.slice(i,i+chunk);
            let tempHtml = [];
            temparray.forEach((product, index) => {
                tempHtml.push(
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.data.title}
                        price={product.data.price}
                        image={product.data.image}
                        rating={product.data.rating}
                    />
                )
            })
            html.push(
                <div className="home__row" key={i + 'home__row'}>
                    {tempHtml}
                </div>
            )
        }

        return html;
    }

    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                {
                    getProductsHtml()
                }
            </div>
        </div>
    )
}

export default Home
