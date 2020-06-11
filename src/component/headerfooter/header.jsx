import React from 'react'
import {Link} from 'react-router-dom'

import logo from '../../assets/images/logo.png'

// import '../../assets/css/style.css'
// import '../../assets/css/bootstrap-grid.css'

import './_header.scss'

const Header = () => (
    <div id="header-container" className="fullwidth">
        <div id="header">
            <div className="container">
                <div className="left-side">
                    {/* Logo section */}
                    <Link id="logo" to='/'>
                        <a><img src={logo} alt="Logo"/></a>
                    </Link>
                    
                    {/* Main Navigation Section */}
                    <nav id="navigation">
                        <ul id="responsive">
                            <li><a><Link to='/'>Beranda</Link></a></li>
                            <li><a><Link to='/y'>Peluang</Link></a></li>
                            <li><a><Link to='/a'>Penjual</Link></a></li>
                            <li><a><Link to='/blog'>Artikel</Link></a></li>
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