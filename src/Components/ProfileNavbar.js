import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import setBgTxtColor from '../preferences/slices/userSlice'

const ProfileNavbar = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch()
 

    const goHome = () => {
        navigate("/")
      }

      const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userDetail");
        navigate("/login");
        window.location.reload();
      }

      const changeMode = (e) => {
        // if (e.target.checked) {
        //     // e.target.checked
        //   let mode = { bg: "dark", txt: "light" };
        //   localStorage.setItem("pageMode", JSON.stringify(mode));
        // //   dispatch(setBgTxtColor())
        //   window.location.reload();
        // } else {
        //   let mode = { bg: "light", txt: "dark" };
        //   localStorage.setItem("pageMode", JSON.stringify(mode));
        //   window.location.reload();
        // }
      };


  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a onClick={goHome} className="back-button" title="Go Back">
            <i className="fa fa-arrow-left"></i>
          </a>
          <div className="form-check form-switch dark-light-switch">
            <input onClick={(event)=>changeMode(event)}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              Enable Dark Mode
            </label>
          </div>
          <button onClick={handleLogout} className="btn btn-outline-success">Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default ProfileNavbar;
