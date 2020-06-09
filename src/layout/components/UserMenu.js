import React from 'react'

const UserMenu = () => {
    // <!-- User Menu -->
    return(
        <div className="header-widget">
            {/* messages */}
            <div className="header-notifications user-menu">
                {/* trigger */}
                <div className="header-notifications-trigger">
                    <a href="#">
                        <div className="user-avatar status-olnie">
                            <img src="/images" alt="" />
                        </div>
                    </a>
                </div>

                {/* dropdown */}
                <div className="header-notifications-dropdown">
                    {/* user status */}
                    <div className="user-status">
                        {/* user avatar */}
                        <div className="user-details">
                            <div className="user-avatar status-online">
                                <img src="/images" alt="" />
                            </div>
                            <div className="user-name">
                                GTom <span>Freelance</span>
                            </div>
                        </div>

                        {/* user status switcher */}
                        <div className="status-switch" id="snackbar-user-status">
                            <label className="user-online current-status">Online</label>
                            <label className="user-invisible">Invisible</label>
                            {/* status indicator */}
                            <span className="status-indicator" aria-hidden="true"></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserMenu;