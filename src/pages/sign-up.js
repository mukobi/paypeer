import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/login.css';

const SignUp = () => (
    <div className="b-content b-login">
        <div className="title">
            <h1>Sign up for PayPeer</h1>
            <p>Start exchanging and sending your cryptocurrencies today!</p>
        </div>
        <div className="login-form">
            <form>
                <label htmlFor="email-login" autoComplete="email">Email</label>
                <input type="text" id="email-login" />
            
                <label htmlFor="password-1-login">Password</label>
                <input type="text" id="password-1-login" />
            
                <label htmlFor="password-2-login">Retype Password</label>
                <input type="text" id="password-2-login" />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
        <div className="other-login">
            <p>Already a member? </p><NavLink to='/sign-in'>Sign in</NavLink>
        </div>
    </div>
);

export default SignUp;