import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setPageError } from '../preferences/slices/userSlice'
import { useDispatch } from 'react-redux'
import Spinner from './Spinner'


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [spin, setSpin] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
            if (email && password) {
                // to enable spinner 
                setSpin(true);
                

                let data = await fetch("http://localhost:8000/api/auth/login", {
                    method: "POST",
                    body: JSON.stringify({ email: email, password: password }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                data = await data.json();
                if (!data.error) {
                    setTimeout(()=>{
                        localStorage.setItem("user", data.user);
                        props.showAlert(`User Logged-In Successfully`, "success")
                        setSpin(false)
                    },500)
                    
                }
                else {
                    props.showAlert(data.error, "danger")
                }
            }

            else {
                props.showAlert("All fields are required", "warning")
            }

        } catch (error) {
            navigate("/404-Error")
            dispatch(setPageError());
        }
    }
    return (
        <>
            {spin ? (
                <>
                    <Spinner height={"100vh"} />
                </>
            ) : (
                <>
                    <div className='container login-signup'>
                        <div className='container'>
                            <h1 className="text-center pb-5  ">Login</h1>
                            <form className='container'>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} id="email" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} id="password" className="form-control" />
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col">

                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>


                                <button type="button" onClick={handleLogin} className="btn btn-primary btn-block mb-4 login-signup-btn">Sign in</button>


                                <div className="text-center">
                                    <p>Not a member? <Link to="/signup  
                        ">Register</Link></p>
                                    <p>or sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>)

            }
        </>
    )
}

export default Login