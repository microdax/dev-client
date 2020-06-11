import React from 'react';

import {Logo, Nav, Notif, UserMenu, Hamburger} from './components';

import {Beranda, Peluang, Penjual, Artikel} from '../pages';

import{
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const Header = () => {
    return(
        <div id="header-container" className="fullwidth">
            <div id="header">
                <Router>
                <div className="container">
                    <div className="left-side"> 
                        <Logo />
                        <Nav />
                            <Switch>
                                <Route path='/'>
                                    <Beranda />
                                </Route>
                                <Route path='/peluang'>
                                    <Peluang />          
                                </Route>
                                <Route path='/penjual'>
                                    <Penjual />
                                </Route>
                                <Route path='/artikel'>
                                    <Artikel />
                                </Route>
                            </Switch>
                        <div className="clearfix"/>
                    </div>
                    <div className="rigth-side">
                        <Notif />
                        <UserMenu />
                        <Hamburger />
                    </div>
                </div>
                </Router>
            </div>
        </div>
    )
}
    

export default Header;