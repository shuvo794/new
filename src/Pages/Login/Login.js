import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {googleSignIn}=useAuth();
    return (
        <div>
            <div>
                <h2>Please Login</h2>
<form action="">
<input className=" mt-3"  type="email" name="" id="" placeholder="Your Email" />
<br />
<input className=" mt-3" type="password" name="" id="" />
<br />
<input className=" mt-3 bg-dark text-white" type="submit" value="Submit" />



</form>
<p>New to you this site? <Link to="/resister">Create Account</Link></p>


<br /><br />
<div className="text-danger">--------Google Sign in--------</div>
<br />
 <button onClick={googleSignIn} className="btn btn-warning">Google Sign in</button>
           
            </div>
        </div>
    );
};

export default Login;