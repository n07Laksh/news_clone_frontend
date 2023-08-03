import React, { useState, useEffect } from 'react'
import Footer from './Footer';
import Navbarfirst from './Navbarfirst';
import Navbarsec from './Navbarsec';
import NewsComponent from './NewsComponent';
import Profile from './Profile';
import { Route, Routes, useLocation } from 'react-router-dom';

function Home() {
    const [isSticky, setIsSticky] = useState(false);
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
                // props.showAlert(`Welcome Again`, "success")
            }
            else {
                // props.showAlert(data.error, "danger")
            }
        }

        if (!localStorage.getItem("userDetail")) {
            getUser();
        }

        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            const sticky = navbar.offsetTop;
            setIsSticky(window.pageYOffset >= sticky);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        
    }, [])

    // window.onscroll = function () { myFunction() };

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }

    return (
        <div>

            {location.pathname === "/profile" ? (
                <Routes>
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            ) : (
                <>
                    <Navbarfirst />
                    <Navbarsec isSticky={isSticky} />
                    <NewsComponent />
                    <Footer />
                </>
            )}
        </div>

    )
}

export default Home
