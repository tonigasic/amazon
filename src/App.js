import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51I3MVvJLHn6iQ6z86pGfVPciyNPBGgmfYbhPfMlEfSa2D6TeyTDq24IFjv2X9XozAilDyCHB4XekoFasPogA1r5500QjsZmMPX');


function App() {
    const [{}, dispatch] = useStateValue();

    // will only run once when the app component loads...
    useEffect(()=> {
        auth.onAuthStateChanged(authUser => {
            console.log('ussseerrr', authUser);
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            }
            else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])

    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
