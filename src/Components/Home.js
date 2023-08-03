import React, { } from 'react'
import Footer from './Footer';
import Navbarfirst from './Navbarfirst';
import Navbarsec from './Navbarsec';
import NewsComponent from './NewsComponent';
import Profile from './Profile';
import { Route, Routes, useLocation } from 'react-router-dom';


function Home() {
    const location = useLocation()

    return (
        <div>

            {location.pathname === "/profile" ? (
                <Routes>
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            ) : (
                <>
                    <Navbarfirst />
                    <Navbarsec />
                    <NewsComponent />
                    <Footer />
                </>
            )}
        </div>

    )
}

export default Home
