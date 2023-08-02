import React from 'react'
import News27logo from "../image/News 27 Logo.png"

function Navbarfirst() {
    return (
        <div className='container-fluid top-container'>
            <div className="top-container-child-elem">
                <div className='top-container-lefttside-content'>
                    <img src={News27logo} className='top-container-lefttside-content-logo' alt='News logo'/>
                </div>
                <div className='top-container-rightside-content'>
                    <div className='lengtvappsocial'>
                        <div className="leng ltas">Choose Language</div>
                        <div className="tv ltas"><i className="fa fa-television me-2"></i> live TV</div>
                        <div className="app ltas"><i className="fa fa-mobile fa-lg me-2"></i>Download News 27 APK</div>
                        <div className="social ltas">Follow Us On &gt; <i className="fa fa-twitter text-primary"></i> <i className="fa fa-instagram text-danger ms-3"></i> <i className="fa fa-facebook ms-3"></i> <i className="fa fa-youtube-play text-danger ms-3"></i> <i className="fa fa-telegram text-primary ms-3"></i></div>
                    </div>
                    <div className="trendingsection">
                    Trendings : <a className='trendingTag' href="#Cricket">#Cricket</a><a className='trendingTag' href="#Politics">#Politics</a><a className='trendingTag' href="#India">#India</a><a className='trendingTag' href="#Weather">#Weather</a>    
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbarfirst
