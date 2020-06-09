/* eslint-disable no-unused-expressions */
import React from 'react';

import Header from './Header';

import Footer from './Footer';

const Layout = (props) =>   
    <div id="wrapper">  
        {props.children}
    </div>;

export {Layout, Header, Footer}; 