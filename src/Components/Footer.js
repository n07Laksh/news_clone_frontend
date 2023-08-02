import React from 'react'
import News27Logo from '../image/News 27 Logo.png'

function Footer() {
    return (
        <div className="footer_container row-bg container-fluid">
            <div className="row firstrow full-border">
                <div className="row width footer_row_column_border justify-content-between">
                    <div className="col ">
                        <div className="w-100 column_heading_parent">
                            <div className="column_heading">Trending Topic</div>
                        </div>
                        <div className="row mt-2 row-cols-3">
                            <div className="col link">Topic 1</div>
                            <div className="col link">Topic 2</div>
                            <div className="col link">Topic 3</div>
                            <div className="col link">Topic 4</div>
                            <div className="col link">Topic 5</div>
                            <div className="col link">Topic 6</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="w-100 column_heading_parent">
                            <div className="column_heading">Popular Topic</div>
                        </div>
                        <div className="row mt-2 row-cols-3">
                            <div className="col link">Topic 1</div>
                            <div className="col link">Topic 2</div>
                            <div className="col link">Topic 3</div>
                            <div className="col link">Topic 4</div>
                            <div className="col link">Topic 5</div>
                            <div className="col link">Topic 6</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row firstrow full-border">
                <div className="row width">
                    <div className="col-9">
                        <div className="w-100 column_heading_parent">
                            <div className="column_heading">Language Sites</div>
                        </div>
                        <div className="row mt-2 row-cols-4">

                            <div className="col link">Topic 1</div>
                            <div className="col link">Topic 2</div>
                            <div className="col link">Topic 3</div>
                            <div className="col link">Topic 4</div>
                            <div className="col link">Topic 5</div>
                            <div className="col link">Topic 6</div>
                            <div className="col link">Topic 7</div>
                            <div className="col link">Topic 8</div>
                            <div className="col link">Topic 9</div>
                            <div className="col link">Topic 10</div>

                        </div>
                    </div>
                    <div className="col-3 border_left">
                        <div>
                            Live TV
                        </div>
                        <div>
                            <i className='fa fa-television'></i>  Play Live Tv
                        </div>
                    </div>
                </div>
            </div>


            <div className="row firstrow full-border">
                <div className="row width">
                    <div className="w-100 column_heading_parent">
                        <div className="column_heading">News 27 Group</div>
                    </div>
                    <div className="row mt-2 row-cols-3">

                        <div className="col link">Topic 1</div>
                        <div className="col link">Topic 2</div>
                        <div className="col link">Topic 3</div>
                        <div className="col link">Topic 4</div>
                        <div className="col link">Topic 5</div>
                        <div className="col link">Topic 6</div>
                        <div className="col link">Topic 7</div>
                        <div className="col link">Topic 8</div>
                    </div>
                </div>
            </div>


            <div className="row firstrow row-black white-border">
                <div className="row width row-black">
                    <div className="col-3 bottom-news27-logo">
                        <img src={News27Logo} className='news27-bottom-logo' alt="News27_Logo" />
                    </div>
                    <div className="col-6">
                        <div className="row mt-2 row-cols-3 justify-content-start row-black">
                            <div className="col link">Topic 1</div>
                            <div className="col link">Topic 2</div>
                            <div className="col link">Topic 3</div>
                            <div className="col link">Topic 4</div>
                            <div className="col link">Topic 5</div>
                            <div className="col link">Topic 6</div>
                            <div className="col link">Topic 7</div>
                            <div className="col link">Topic 8</div>
                        </div>
                    </div>
                    <div className="col">
                        <i className="fa fa-twitter text-primary"></i> <i className="fa fa-instagram text-danger ms-3"></i> <i className="fa fa-facebook ms-3"></i> <i className="fa fa-youtube-play text-danger ms-3"></i> <i className="fa fa-telegram text-primary ms-3"></i>
                    </div>
                </div>
            </div>
            <div className="row firstrow row-black ">
                <div className="row width row-black">
                    <div className="col text-sm">CNN name, logo and all associated elements ® and © 2020 Cable News Network LP, LLLP. A Time Warner Company. All rights reserved. CNN and the CNN logo are registered marks of Cable News Network, LP LLLP, displayed with permission. Use of the CNN name and/or logo on or as part of NEWS18.com does not derogate from the intellectual property rights of Cable News Network in respect of them. © Copyright Network18 Media and Investments Ltd 2020. All rights reserved.
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
