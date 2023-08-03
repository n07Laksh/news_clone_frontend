import React, { useEffect } from 'react'
import Footer from './Footer';
import Navbarfirst from './Navbarfirst';
import Navbarsec from './Navbarsec';
import NewsComponent from './NewsComponent';
import Profile from './Profile';
import { Route, Routes, useLocation } from 'react-router-dom';


function Home({ showAlert }) {
    // const { showAlert } = props;
    const location = useLocation()
    useEffect(() => {
        const getUser = async () => {
            let data = await fetch("http://localhost:8000/api/auth/getuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "jwtoken": localStorage.getItem("user"),
                }
            });
            data = await data.json();
            console.log(data)
            if (!data.error) {
                localStorage.setItem("userDetail", JSON.stringify(data.user));
                showAlert(`Welcome Again`, "success")
            }
            else {
                showAlert(data.error, "danger")
            }
        }

        if (!localStorage.getItem("userDetail")) {
            getUser();
        }
        
    },[])

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
