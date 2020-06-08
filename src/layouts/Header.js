import React from 'react';

import Nav from './components/Nav';
import Notif from './components/Notif';
import UserMenu from './components/UserMenu';
import Logo from './components/Logo';

const Header = () => (
    <div id="header" className="container">
        <div className="left-side"> 
            <Logo />>
            <Nav />
        </div>
        <div className="rigth-side">
            <div>
                <Notif />
                <UserMenu />
            </div>
        </div>
    </div>
)

export default Header;