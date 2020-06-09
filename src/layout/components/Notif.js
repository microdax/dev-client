import React from 'react';

const Notif = () => {
    return(
        // user notification
        <div className="header-widget hide-on-mobile">
            {/* notifications */}
            <div className="header-notifications">
                {/* Trigger */}
                <div className="header-notifications-trigger">
                    <a href="#"><i className="icon-feather-bell"><span>4</span></i></a>
                </div>

                {/* Dropdown */}
                <div className="header-notifications-dropdown">
                    <div className="header-notifications-headline">
                        <h4>Notifications</h4>
                        <button className="mark-as-read ripple-effect-dark"
                            title="Mark all as read"
                            data-tippy-placement="left">
                            <i className="icon-feather-check-square"></i>
                        </button>
                    </div>
                    <div className="header-notifications-content">
                        <div className="header-notifications-scroll" 
                            data-simplebar>
                            <ul>
                                {/* notification  */}
                                <li className="notifications-not-read"></li>
                                {/* notification dashboard manage bidders */}
                                <li>
                                    <a href="#"></a>
                                </li>
                                {/* notification dashboard manage jobs */}
                                <li>
                                    <a href="#"></a>
                                </li>
                                {/* notification dashboard manage candidates */}
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* messages */}
            <div className="header-notifications">
                {/* icon messages */}
                <div className="header-notifications-trigger">
                    <a href="#"><i className="icon-feather-mail">3</i></a>
                </div>

                {/* dropdown */}
                <div className="header-notifications-dropdown">
                    <div className="header-notifications-headline">
                        <h4>Messages</h4>
                        <button className="mark-as-read ripple-effect-dark"
                            title="Mark all as read"
                            data-tippy-placement="left"
                            >
                            <i className="icon-feather-check-square"></i>
                        </button>
                    </div>

                    <div className="header-notifications-content">
                        <div className="header-notifications-scroll" data-simpler>
                            <ul>
                                {/* notification dashboard messages */}
                                <li className="notifications-not-read">
                                    <a href="#">
                                        <span className="notification-avatar status-online">
                                            <img src="/images" alt="" />
                                        </span>
                                        <div className="notifications-text">
                                            <strong>David Peterson</strong>
                                            <p class="notifications-msg-text">Thanksssdfasdfsdfsdf...</p>
                                            <span className="color"></span>
                                        </div>
                                    </a>
                                </li>
                                
                                {/* notification */}
                                <li className="notifications-not-read">
                                    <a href="#">
                                        <span className="notification-avatar status-online">
                                            <img src="/images" alt="" />
                                        </span>
                                        <div className="notifications-text">
                                            <strong>Erico daamn</strong>
                                            <p class="notifications-msg-text">Thanksssdfasdfsdfsdf...</p>
                                            <span className="color"></span>
                                        </div>
                                    </a>
                                </li>

                                {/* notification */}
                                <li className="notifications-not-read">
                                    <a href="#">
                                        <span className="notification-avatar status-online">
                                            <img src="/images" alt="" />
                                        </span>
                                        <div className="notifications-text">
                                            <strong>Ryan Kahl</strong>
                                            <p class="notifications-msg-text">Thanksssdfasdfsdfsdf...</p>
                                            <span className="color"></span>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                
                    <a href="#" 
                        className="header-notifications-button ripple-effect button-sliding-icon">
                            View All Messages
                            <i className="icon-material-outline-arrow-right-alt"></i>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Notif;