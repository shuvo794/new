import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    
    return (
        <div>
            <div>
                <h2>Create Account</h2>
                <form action="">
                    <input className=" mt-3"  type="text"  placeholder="Enter Your Name"/>
                    <br />
<input className=" mt-3"  type="email" name="" id="" placeholder="Enter Your Email"/>
<br />
<input type="password" name="" id="" placeholder="Enter Your Password"/>
<br />
<input type="password" name="" id="" placeholder="Re-Enter Your Password"/>
<br />
<input className=" mt-3" type="submit" value="Submit" />
                </form>
                <p>New to you this site? <Link to="/login">Login</Link></p>



            </div>
        </div>
    );
};

export default Register;