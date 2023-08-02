import React from 'react'
import News27logo from '../image/News 27 Logo.png'
import image1 from '../image/download.jpg'
import CricketNextSvg from '../image/CricketNext.svg'
import CricketSilhouette from '../image/Cricket_Silhouette_2.svg'

function NewsComponent() {
    return (
        <>
            <div className="main-container">
                <div className='news-container'>
                <div className="effect">
                     Welcome to the News 27 
                </div>
                    <div className="row row-cols-3 news-row-container">
                        <div className="col-5 ">
                            <div className="row">
                                <div className="col-12 image-heading-parent">
                                    <img src={image1} alt="IMG" className='image1' />
                                    <p className='image-heading para'>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, corrupti!
                                    </p>
                                </div>
                                <div className="col-6 image2-col">
                                    <img src={image1} alt="IMG" className='image2' />
                                    <p className='left-heading-paragraph para'>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi pariatur.
                                    </p>
                                </div>
                                <div className="col-6 image2-col">
                                    <img src={image1} alt="IMG" className='image2' />
                                    <p className='left-heading-paragraph para'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                    </p>
                                </div>

                            </div>

                        </div>
                        <div className="col-4">
                            <div className="row">
                                <ul className='right-heading-ul'>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione Lorem ipsum dolor sit amet..</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                    <li className="right-heading para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, ratione.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 sec-right-heading ">
                            <h3 className="head">News27 Special</h3>

                            <ul className="sec-right-heading-ul">
                                <li className="sec-right-heading">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <li className="sec-right-heading top-border">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <li className="sec-right-heading top-border">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <li className="sec-right-heading top-border">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <li className="sec-right-heading top-border">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <div className="redmore w-100 text-center bg-light p-1 mt-2 para">
                                    See All News
                                </div>
                            </ul>
                        </div>
                    </div>


                    <div className="row row-cols-2">
                        <div className="col-9 mt-4">
                            <div className="row row-cols-2 trending-col">
                                <div className='col-8'>
                                    <h4 className="heading-content ">
                                        Trending Videos
                                        <span className='red-line'></span>
                                    </h4>
                                    <div className="row row-cols-3">
                                        <div className="col-4">
                                            <img src={image1} alt="IMG" className='image3' />
                                            <p className='image-3-paragraph para'>
                                                Lorem ipsum dolor sit amet consectetur
                                            </p>
                                            <div className='rectangle navigate-content float-end'></div>
                                        </div>
                                        <div className="col-4">
                                            <img src={image1} alt="IMG" className='image3' />
                                            <p className='image-3-paragraph para'>
                                                Lorem ipsum dolor sit amet consectetur
                                            </p>
                                            <div className='navigate-content'><span className="entity">&larr;</span> <span className="small-rect1"></span><span className="small-rect2"></span> <span className="entity">&rarr;</span></div>
                                        </div>
                                        <div className="col-4">
                                            <img src={image1} alt="IMG" className='image3' />
                                            <p className='image-3-paragraph para '>
                                                Lorem ipsum dolor sit amet consectetur
                                            </p>
                                            <div className='rectangle navigate-content float-start'></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <h4 className="heading-content ">
                                        LIVE TV
                                        <span className='red-line'></span>
                                    </h4>
                                    <div className="row">
                                        <div className="col ">
                                            <img src={image1} alt="IMG" className='image4' />
                                            <p className='image-4-paragraph para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row cricket-row">
                                <div className="cricket-logos">
                                    <img className='cricket-news27-logo' src={News27logo} alt="" />
                                    <img className='cricket-next-logo' src={CricketNextSvg} alt="" />
                                    <img className='cricket-silhouette-logo' src={CricketSilhouette} alt="" />
                                    <span className='cricket-more '>More From Cricket</span>
                                </div>
                                <div className="col-2 cricket-first-column">
                                    <img src={image1} alt="IMG" className='grid-item-image1' />
                                    <p className='para'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                    </p>
                                </div>
                                <div className="col-10">
                                    <div className="row cricket-second-column">
                                        <div className="col-3"><img src={image1} alt="IMG" className='grid-item-image1' />
                                            <p className='para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p></div>
                                        <div className="col-3"><img src={image1} alt="IMG" className='grid-item-image1' />
                                            <p className='para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p></div>
                                        <div className="col-3"><img src={image1} alt="IMG" className='grid-item-image1' />
                                            <p className='para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p></div>
                                        <div className="col-3"><img src={image1} alt="IMG" className='grid-item-image1' />
                                            <p className='para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p></div>
                                        <div className="col-6 cricket-sec-row"><img src={image1} alt="IMG" className='grid-item-image1-second-row' />
                                            <p className='para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p></div>
                                        <div className="col-6 col-6 cricket-sec-row"><img src={image1} alt="IMG" className='grid-item-image1-second-row' />
                                            <p className='para'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia saepe laboriosam
                                            </p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h3 className="head mt-4">Latest News</h3>
                            <ul className="sec-right-heading-ul">
                                <li className="sec-right-heading">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <li className="sec-right-heading top-border">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <li className="sec-right-heading top-border">
                                    <img src={image1} alt="img" className='sec-right-image' />
                                    <p className='para'>Lorem ipsum dolor sit ametr Lorem ipsum dolor sit amet consectetur..</p>
                                </li>
                                <div className="redmore w-100 text-center bg-light p-1 mt-2 para">
                                    More Latest
                                </div>
                            </ul>
                            <h4 className="head mt-5">Air Quality Index</h4>
                            <div className='row row-cols-2'>
                                <div className="col-6">
                                    <div className="card" style={{ width: "8rem" }}>
                                        <div className="card-body">

                                            <h6 className="card-title"><i className="fa fa-location-arrow"></i> Mumbai</h6>
                                            <h4 className="card-text">109</h4>
                                            <a href="/" className="btn btn-primary btn-sm">Poor</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card" style={{ width: "8rem" }}>
                                        <div className="card-body">

                                            <h6 className="card-title"><i className="fa fa-location-arrow"></i> Mumbai</h6>
                                            <h4 className="card-text">109</h4>
                                            <a href="/" className="btn btn-primary btn-sm">Poor</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card" style={{ width: "8rem" }}>
                                        <div className="card-body">

                                            <h6 className="card-title"><i className="fa fa-location-arrow"></i> Mumbai</h6>
                                            <h4 className="card-text">109</h4>
                                            <a href="/" className="btn btn-primary btn-sm">Poor</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card" style={{ width: "8rem" }}>
                                        <div className="card-body">

                                            <h6 className="card-title"><i className="fa fa-location-arrow"></i> Mumbai</h6>
                                            <h4 className="card-text">109</h4>
                                            <a href="/" className="btn btn-primary btn-sm">Poor</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsComponent
