import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Navbar/Navbar";

function Login() {
  
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    return (
        <div>
            <Header/>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col" />
                    <div className="col-md-4 card">
                        <form className="form-group">
                            <h2 className="text-primary text-center mt-2">Login</h2>
                            <div className="col-xs-2">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" value={email}
                                    onChange={(e) => setemail(e.target.value)} required/>
                            </div>
                            <div className="col-xs-2 mt-2">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={password}
                                    onChange={(e) => setpassword(e.target.value)} required/>
                            </div>
                            <div className="text-center mt-3 mb-2">
                                <div className="container mt-1 mb-0 text-center text-danger" id="msg"></div>
                                <button type="submit" className="btn btn-primary mt-3 text-center">Login</button>
                            </div>
                            <div className="text-center">
                                <div className="container mt-1 mb-0 text-center text-danger" >
                                    <a className="text-danger" href="/reset-password">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="container mt-1 mb-0 text-center text-danger" >
                                    <Link to="/signup">Don't have an account? Register</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col" />
                </div>
            </div>
            <div className="container pb-5 mb-5"/>
        </div>
    )
}

export default Login;