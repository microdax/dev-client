import React from 'react';
import {NavLink} from 'react-router-dom';
import 'react-bootstrap';
import 'react-bootstrap-select';
import 'react-bootstrap-slider';

const navs = [
    {
        path: '/',
        name: 'Beranda'
    },
    {
        path: '/peluang',
        name: 'Peluang'
    },
    {
        path: '/penjual',
        name: 'Penjual'
    },
    {
        path: '/artikel',
        name: 'Artikel'
    }    
]

const Header = () => (
    <nav id="navigation">
        <ul id="responsive">
            {navs.map((navItem) => (
                <li>
                    <a>
                        <NavLink exact to={navItem.path} 
                            className="current">
                                {navItem.name}
                        </NavLink>
                    </a>
                </li>
            ))}  
        </ul>
    </nav>
)

export default Header;