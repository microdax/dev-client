/* eslint-disable no-unused-expressions */
import React from 'react';

import Banner from './banner';
import Content from './content';

const Layout = (props) =>   
    <div>  
        {props.children}
    </div>;

export {Layout, Banner, Content}; 