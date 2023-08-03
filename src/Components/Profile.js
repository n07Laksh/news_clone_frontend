import React, {useState, useEffect } from 'react'
import avatarImage from '../avatar1.png'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPageError, setUser } from '../preferences/slices/userSlice'
import Spinner from './Spinner'
import ProfileNavbar from './ProfileNavbar'


function Profile() {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    const getUser = async () => {
      setSpin(true);
      try {
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
          setTimeout(()=>{
          dispatch(setUser(data.user));
          localStorage.setItem("userDetail", JSON.stringify(data.user)); 
          setSpin(false)              
        },500)
        }
        else {
          console.log(data)
        }
      } catch (error) {
        navigate("/404-Error")
        dispatch(setPageError());
      }
    }

    if (!localStorage.getItem("userDetail")) {
      getUser();
    }

  }, [])

  return (
    <>
      {spin ? (
        <>
          <Spinner height={"100vh"} />
        </>
      ) : (
        <>
        <ProfileNavbar />
          <div className="card w-100 d-flex justify-content-center align-item-center" style={{height:"91vh"}}>
            <div className="card card-div" style={{ width: "18rem" }}>
              <img src={avatarImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">Name - {user ? user.name : ""}</p>
                <p className="card-text">Email - {user ? user.email : ""}</p>
              </div>
            </div>
          </div>
        </>)
      }
    </>
  )
}

export default Profile
