import React from 'react'

// import '../../assets/css/style.css'
// import '../../assets/css/bootstrap-grid.css'

const Banner = () => {
    return(
        <div className="intro-banner" data-background-image="../../assets/images/home-background.jpg">
            <div className="container">
                {/* Intro Headline */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-headline">
                            <h3>
                                <strong>Helo ini adalah platform yang bisa menguntungkan</strong>
                                <br/>
                                <span>Thousand dari pemilik bisni bisa berjualan didsisn <strong className="color">MicroDax</strong>Lalu meraka berhasil jadi nyata</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="intro-banner-search-form margin-top-95">
                             <div className="intro-search-field with-autocomplete">
                                <label for="autocomplete-input" className="field-title ripple-effect">Dimana?</label>
                                <div className="input-with-icon">
                                    <input id="autocomplete-input" type="text" placeholder="Peluang"/>
                                    <i className="icon-material-outline-location-on"></i>
                                </div>
                             </div>

                             <div className="intro-search-field">
                                <label for="intro-keywords" className="field-title ripple-effect">Apa yang kamu inginkan?</label>
                                <input id="intro-keywords" type="text" placeholder="Masukan kata kunci"/>
                             </div>

                             <div class="intro-search-button">
                                <button class="button ripple-effect" onclick="">Cari</button>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="row">
                    <div className="col-md-12">
                        <ul className="intro-stats margin-top-45 hide-under-992px"> 
                            <li>
                                <strong className="counter">2411</strong>
                                <span>Produk Terdaftar</span>
                            </li>
                            <li>
                                <strong className="counter">2411</strong>
                                <span>Penjual Terdaftar</span>
                            </li>
                            <li>
                                <strong className="counter">2411</strong>
                                <span>Project Terdaftar</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;