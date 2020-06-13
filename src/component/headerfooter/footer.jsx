import React from 'react'

import logo from '../../assets/images/logo2.png'

const Footer = () => {
    return(
        <div id="footer">
            {/* 1. Top Section */}
            <div className="footer-top-section">
                <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                            <div className="footer-rows-container">
                                {/* Left Side */}
                                <div className="footer-rows-left">
                                    <div className="footer-row">
                                        <div className="footer-row-inner footer-logo">
                                            <img src={logo} alt="Logo"/>
                                        </div>
                                    </div>
                                </div>

                                {/* Rigt Side */}
                                <div className="footer-rows-right">
                                    {/* Social Icons */}
                                    <div className="footer-row">
                                        <div className="footer-row-inner">
                                            <ul className="footer-social-links">
                                                <li>
                                                    <a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                                        <i className="icon-brand-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                                        <i className="icon-brand-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                                        <i className="icon-brand-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                                        <i className="icon-brand-facebook-f"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                     </div>     
                </div>
            </div>

            {/* 2. Middle Section */}
            <div className="footer-middle-section">
                <div className="container">
                    <div className="row">

                        {/* <!-- Links --> */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>Pembeli</h3>
                                <ul>
                                    <li><a href="#"><span>Browse Jobs</span></a></li>
                                    <li><a href="#"><span>Add Resume</span></a></li>
                                    <li><a href="#"><span>Job Alerts</span></a></li>
                                    <li><a href="#"><span>My Bookmarks</span></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Links --> */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>Penjual</h3>
                                <ul>
                                    <li><a href="#"><span>Browse Candidates</span></a></li>
                                    <li><a href="#"><span>Post a Job</span></a></li>
                                    <li><a href="#"><span>Post a Task</span></a></li>
                                    <li><a href="#"><span>Plans & Pricing</span></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Links --> */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>Helpful Links</h3>
                                <ul>
                                    <li><a href="#"><span>Contact</span></a></li>
                                    <li><a href="#"><span>Privacy Policy</span></a></li>
                                    <li><a href="#"><span>Terms of Use</span></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Links --> */}
                        <div className="col-xl-2 col-lg-2 col-md-3">
                            <div className="footer-links">
                                <h3>Account</h3>
                                <ul>
                                    <li><a href="#"><span>Log In</span></a></li>
                                    <li><a href="#"><span>My Account</span></a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Newsletter --> */}
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <h3><i className="icon-feather-mail"></i> Sign Up For a Newsletter</h3>
                            <p>Weekly breaking news, analysis and cutting edge advices on opportunity searching.</p>
                            <form action="#" method="get" className="newsletter">
                                <input type="text" name="fname" placeholder="Enter your email address"/>
                                <button type="submit"><i className="icon-feather-arrow-right"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CopyRights */}
            <div className="footer-bottom-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            © 2020 <strong>MicroDax Team</strong>. All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer