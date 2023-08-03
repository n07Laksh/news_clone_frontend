import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setPageError } from '../preferences/slices/userSlice'
import { useDispatch } from 'react-redux'
import Spinner from './Spinner'



function Signup(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [spin, setSpin] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSingup = async () => {
        try {
            if (name && email && password) {
                setSpin(true) // for showing spineer

                // signup api fetch
                let data = await fetch("http://localhost:8000/api/auth/signup", {
                    method: "POST",
                    body: JSON.stringify({ name: name, email: email, password: password }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                data = await data.json();
                if (!data.error) {
                    setTimeout(()=>{
                    localStorage.setItem("user", data.user)
                    props.showAlert(`Account created successfully`, "success");
                },1000);
                } else {
                    alert(data.message);
                    props.showAlert(data.message, "warning")
                }
            } else {
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
                            <h1 className="text-center pb-5">Signup</h1>
                            <form className='container'>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="name">Name</label>
                                    <input type="text" onChange={(e) => setName(e.target.value)} value={name} id="name" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="email">Email address</label>
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} id="email" className="form-control" />
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" className="form-control" />
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center"></div>
                                </div>


                                <button type="button" onClick={handleSingup} className="btn btn-primary btn-block mb-4 login-signup-btn">SignUp</button>


                                <div className="text-center">
                                    <p>Already have a Account? <Link to="/login">Login</Link></p>
                                    <p>or Login with:</p>
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
                </>
            )
            }
        </>
    )
}

export default Signup
