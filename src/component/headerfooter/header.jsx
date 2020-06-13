import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'

const Header = () => (
    <div id="header-container" className="fullwidth">
        <div id="header">  
            <div className="container">
                <div className="left-side">
                    {/* Logo section */}
                    <Link id="logo" to='/'>
                        <span><img src={logo} alt="Logo"/></span>
                    </Link>
                    
                    {/* Main Navigation Section */}
                    <nav id="navigation">
                        <ul id="responsive">
                            <li><span><Link to='/'>Beranda</Link></span></li>
                            <li><span><Link to='/needs'>Peluang</Link></span></li>
                            <li><span><Link to='/sells'>Penjual</Link></span></li>
                            <li><span><Link to='/blog'>Artikel</Link></span></li>
                        </ul>
                    </nav>        

                    <div className="clearfix"></div>
                </div>

                {/* Using Auth to access user menu content and user notification */}
                <div className="rigth-side">
                    {/* 1. Unauth */}

                    {/* 
                    2. Auth 
                    --User Notifications
                    <div className="header-widget hide-on-mobile">
                        
                    </div>

                    --User Menu
                    --Mobile navigation button
                    */}
                </div>
            </div>
        </div>
        <div className="clearfix"></div>
    </div>
)

export default Header