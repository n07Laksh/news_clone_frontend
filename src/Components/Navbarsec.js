import React from 'react'
import { Link } from 'react-router-dom'

function Navbarsec() {
    return (
        <>
            <div className='container-fluid scroll-nav bg-light'>

                <div className="navigation">

                    <div className='navigation-items1'>

                        <ul className='navigation-items1-ul'>
                            <div className="show-hide me-2">
                                <span className="line span1"></span>
                                <span className="line span2"></span>
                                <span className="line span3"></span>
                            </div>
                            <li className="navigation_items1-li">Fist Item</li>
                            <li className="navigation_items1-li">Second Item</li>
                            <li className="navigation_items1-li">Third Item</li>
                            <li className="navigation_items1-li">Fourth Item</li>
                            <li className="navigation_items1-li">Fifth Item</li>
                            <li className="navigation_items1-li">Sixth Item</li>
                            <li className="navigation_items1-li">Seventh Item</li>
                            <li className="navigation_items1-li">Eigth Item</li>
                            <li className="navigation_items1-li">Ninth Item</li>
                            <li className="navigation_items1-li">Tenth Item</li>
                        </ul>
                    </div>
                    <div className="navigation-items2">
                        <div className="navigation_city">Choose State/City</div>
                        <div className="navigation_search"><i className='fa fa-search'></i></div>
                        <div className="navigation_profile"><button className='btn btn-sm btn-dark '><i className='fa fa-user'></i> <Link to="profile" className='text-light' style={{textDecoration:"none"}} > Profile </Link></button> </div>
                    </div>
                </div>
            </div>

            <div className="sub_navigation">
                <div className="sub_navigation_container">
                    <ul className='sub_navigation_ul'>
                        <li className="sub_navigation_li">Fist Item</li>
                        <li className="sub_navigation_li">Third Item</li>
                        <li className="sub_navigation_li">Fourth Item</li>
                        <li className="sub_navigation_li">Fifth Item</li>
                        <li className="sub_navigation_li">Sixth Item</li>
                        <li className="sub_navigation_li">Seventh Item</li>
                        <li className="sub_navigation_li">Eigth Item</li>
                        <li className="sub_navigation_li">Ninth Item</li>
                        <li className="sub_navigation_li">Tenth Item</li>
                        <li className="sub_navigation_li">Second Item</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbarsec
