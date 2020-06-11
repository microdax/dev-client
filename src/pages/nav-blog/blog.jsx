/* eslint-disable no-unused-expressions */
import React from 'react';

import '../../assets/css/style.css';

const Blog = () => {
    return(
        <div id="titlebar" className="white margin-bottom-30">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Blog</h2>
                        <span>Featured Posts</span>

                        {/* <!-- Breadcrumbs --> */}
                        <nav id="breadcrumbs" className="dark">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li>Blog</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )      
}

export default Blog;