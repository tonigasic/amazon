import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    <Product
                        id="1"
                        title="HUAWEI FreeBuds Pro, True Wireless Bluetooth Headphones with Intelligent Noise Cancellation (Dynamic Noise Cancellation), 3 Microphone System, Wireless Fast Charge, Ceramic White"
                        price={24.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51IUWtql1-L._AC_SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="6"
                        title="DO10_D Fine with D Fine+ Speaker, 1 speaker black"
                        price={14.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61TmN45tnNL._AC_SL1000_.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="2"
                        title="UNBREAKcable iPhone XR case - drop protection, non-slip, soft frosted TPU, ultra thin stylish phone case cover for 6.1 inch iPhone XR, Matte black"
                        price={284.50}
                        image="https://images-na.ssl-images-amazon.com/images/I/61U8xlPGRYL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id="3"
                        title="Bio Retinol Serum II Satin Natural 100ml"
                        price={4.49}
                        image="https://images-na.ssl-images-amazon.com/images/I/61s0YoDA00L._SL1379_.jpg"
                        rating={3}
                    />
                    <Product
                        id="4"
                        title="ZACO Robot Vacuum Cleaner with Wiping Function"
                        price={100.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/71j5vuttlxL._AC_SL1500_.jpg"
                        rating={1}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="5"
                        title="Yonmig Smartwatch, Fitness Wristband, Tracker, Full Touchscreen Watch, Waterproof IP68 Wristwatch, Smartwatch with Pedometer, Heart Rate Monitor, Stopwatch, Sports Watch, Bluetooth, for iOS Android, Women, Men pink"
                        price={37.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81-RdJ72sRL._AC_SL1500_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
