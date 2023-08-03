import React, { useState } from 'react';

import './App.css';
import './MediaQuery.css'
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, userLoginSignup } from './preferences/slices/userSlice'
import Alert from "./Components/Alert";
import PageNotFound from './Components/PageNoteFound';


function App() {
  const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();
  dispatch(userLoginSignup())
  dispatch(setUser());
  const auth_result = useSelector(state => state.user.login_signup_result)
  // const user = useSelector(state => state.user.user);

  const showAlert = (msg, mode) => {
    setAlert({
      msg: msg,
      mode: mode
    });
    setTimeout(() => setAlert(null), 2000);
  }

  return (
    <>

      <div style={{ position: "fixed", width: "100%", zIndex:"3" }}>
        <Alert alert={alert} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={auth_result ? <Home /> : <Navigate to="/login" />} />
          <Route exact path="/login" element={!auth_result ? <Login showAlert={showAlert}/> : <Navigate to="/" />} />
          <Route exact path="/signup" element={!auth_result ? <Signup showAlert={showAlert}/> : <Navigate to="/" />} />
          <Route exact path="/404-Error" element={!auth_result ? <PageNotFound /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
