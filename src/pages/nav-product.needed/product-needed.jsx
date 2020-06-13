/* eslint-disable no-unused-expressions */
import React from 'react';

const ProductNeed = () => {
    return(
        <div className="full-page-container">
            {/* 1. Sidebar Section */}
            <div className="full-page-sidebar">
                <div className="full-page-sidebar-inner" data-simplebar>
                    <div className="sidebar-container">
                        <div>
                            {/* 1. Location */}
                            <div className="sidebar-widget">
                                <div className="autocomplete-container">
                                    <input id="autocomplete-input" type="text" placeholder="Location"/>
                                </div>
                                <i className="icon-material-outline-location-on"></i>
                            </div>

                            {/* 2. Keywords */}
                            <div className="sidebar-widget">
                                <div className="keywords-container">
                                    <div className="keyword-input-container">
                                        <input type="text" className="keyword-input" placeholder="Keyword" />
                                        <button className="keyword-input-button ripple-effect">
                                            <i className="icon-material-outline-add"></i>
                                        </button>
                                    </div>
                                    <div className="keyword-list"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>

                            {/* 3. Category */}
                            <div className="sidebar-widget">
                                <h3>Kategori Produk</h3>
                                <select className="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="Semua Kategori">
                                    <option>Produk 1</option>
                                    <option>Produk 2</option>
                                    <option>Produk 3</option>
                                    <option>Produk 4</option>
                                    <option>Produk 5</option>
                                    <option>Produk 6</option>
                                    <option>Produk 7</option>
                                    <option>Produk 8</option>
                                </select>
                            </div>

                            {/* 4. Job Types */}
                            <div className="sidebar-widget">
                                <h3>Jenis Peluang</h3>

                                <div className="switches-list">
                                    <div className="switch-container">
                                        <label className="switch"><input type="checkbox"/><span className="switch-button"></span> Freelance</label>
                                    </div>

                                    <div className="switch-container">
                                        <label className="switch"><input type="checkbox"/><span className="switch-button"></span> Full Time</label>
                                    </div>

                                    <div className="switch-container">
                                        <label className="switch"><input type="checkbox"/><span className="switch-button"></span> Part Time</label>
                                    </div>

                                    <div className="switch-container">
                                        <label className="switch"><input type="checkbox"/><span className="switch-button"></span> Internship</label>
                                    </div>
                                    <div className="switch-container">
                                        <label className="switch"><input type="checkbox"/><span className="switch-button"></span> Temporary</label>
                                    </div>
                                </div>
                            </div>

                            {/* 5. Salary */}
                            <div className="sidebar-widget">
                                <h3>Salary</h3>
                                    <div className="margin-top-55"></div>

                                {/* <!-- Range Slider --> */}
                                <input className="range-slider" type="text" value="" data-slider-currency="$" data-slider-min="1500" data-slider-max="15000" data-slider-step="100" data-slider-value="[1500,15000]"/>
                            </div>

                            {/* 6. Tags */}
                            <div className="sidebar-widget">
                                <h3>Tags</h3>

                                <div className="tags-container">
                                    <div className="tag">
                                        <input type="checkbox" id="tag1"/>
                                        <label for="tag1">front-end dev</label>
                                    </div>
                                    <div className="tag">
                                        <input type="checkbox" id="tag2"/>
                                        <label for="tag2">angular</label>
                                    </div>
                                    <div className="tag">
                                        <input type="checkbox" id="tag3"/>
                                        <label for="tag3">react</label>
                                    </div>
                                    <div className="tag">
                                        <input type="checkbox" id="tag4"/>
                                        <label for="tag4">vue js</label>
                                    </div>
                                    <div className="tag">
                                        <input type="checkbox" id="tag5"/>
                                        <label for="tag5">web apps</label>
                                    </div>
                                    <div className="tag">
                                        <input type="checkbox" id="tag6"/>
                                        <label for="tag6">design</label>
                                    </div>
                                    <div className="tag">
                                        <input type="checkbox" id="tag7"/>
                                        <label for="tag7">wordpress</label>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>

                        {/* <!-- Search Button --> */}
                        <div className="sidebar-search-button-container">
                            <button className="button ripple-effect">Search</button>
                        </div>
                        {/* <!-- Search Button / End--> */}
                    </div>
                </div>
            </div>

            {/* 2. Page Content Section */}
            <div className="full-page-content-container" data-simplebar>
                
            </div>
        </div>
    )
}

export default ProductNeed;