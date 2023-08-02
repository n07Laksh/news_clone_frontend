import React from 'react'
import avatarImage from '../avatar1.png'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()
  const user = useSelector(state => JSON.parse(state.user.user))
  // console.log(user);

  const goHome = () => {
    navigate("/")
  }
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("userDetail");
    navigate("/login");
    window.location.reload();
  }
  
  return (
    <>
    <div className="card w-100 d-flex justify-content-center align-item-center">
      <div className="card card-div" style={{width: "18rem"}}>
        <img src={avatarImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Name - {user?user.name:""}</p>
          <p className="card-text">Email - {user?user.email:""}</p>
        </div>
        <div className="w-100">
          <button onClick={goHome} className="btn btn-primary btn-sm w-100">Go Home</button>
          <button onClick={handleLogout} className="btn btn-primary btn-sm w-100 mt-1">Log Out</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
