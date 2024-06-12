import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>

            <h1 align="center"><u>LOGIN</u></h1>
            <div className="container">
                <div class="card" >
                   
                        <div class="card-body">

                        </div>
                        <div className="row">
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" name="" id="" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success">login</button>
                                        <p>new users click here <Link to="/add">Sign up</Link></p>
                                        
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                </div>    </div>
                </div>
                
            )
}

            export default Login