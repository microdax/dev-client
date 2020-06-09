import React from 'react';

const Hamburger = () => {
    // Logo
    return(
        <span class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </span>
    )   
}

export default Hamburger;