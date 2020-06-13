import React from 'react'

const FeaturedJob = () => {
    return(
        <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        {/* Section Headline */}
                        <div className="section-headline margin-top-0 margin-bottom-35">
                            <h3>Peluang Tersedia</h3>
                            <a href="#" className="headline-link">Cari Semua</a>
                        </div>

                        {/* Jobs Container */}
                        <div className="listings-container compact-list-layout margin-top-35">
                            <span className="job-listing with-apply-button">
                                <div className="job-listing-details">
                                    {/* 1. logo */}
                                    <div className="job-listing-company-logo">
                                        <img src="../../assets/images/company-logo-01.png"/>
                                    </div>

                                    {/* 2. details */}
                                    <div className="job-listing-description">
                                        <h3 className="job-listing-title">Ada peluang dibeli Jagung 3 Ton per minggu</h3>
                                        <div className="job-listing-footer">
                                            <ul>
                                                <li><i className="icon-material-outline-business"></i>
                                                    <div className="verified-badge" title="Verified Supplier" data-tippy-placement="top"/>
                                                </li>
                                                <li><i className="icon-material-outline-location-on"></i></li>
                                                <li><i className="icon-material-outline-business-center"></i></li>
                                                <li><i className="icon-material-outline-access-time"></i></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 3. apply button */}
                                    <span className="list-apply-button ripple-effect">Apply Now</span>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedJob