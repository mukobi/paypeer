import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/login.css';

const SignIn = () => (
    <div className="b-content b-login">
        <div className="title">
            <h1>Sign in to PayPeer</h1>
            <p>Start exchange and sending your cryptocurrencies today!</p>
        </div>
        <div className="login-form">
            <form>
                <label htmlFor="email-login" autoComplete="email">Email</label>
                <input type="text" id="email-login" />
            
                <label htmlFor="password-1-login">Password</label>
                <input type="text" id="password-1-login" />

                <input type="submit" value="Sign In" />
            </form>
        </div>
        <div className="other-login">
            <p>Dont have an account? </p><NavLink to='/sign-up'>Sign up</NavLink>
        </div>
    </div>
);

export default SignIn;