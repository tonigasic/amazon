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
                        <Payment/>
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
