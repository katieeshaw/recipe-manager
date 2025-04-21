import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { getToken, isTokenValid } from '../utils/auth';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  // Redirect to /home if already logged in
  useEffect(() => {
    const token = getToken();
    if (isTokenValid(token)) {
      navigate('/home');
    }
  }, [navigate]);

  // Handles login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const formData = new FormData();
      formData.append('username', email);
      formData.append('password', password);

      const res = await axios.post('http://localhost:8000/login', formData, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      const token = res.data.access_token;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setErrorMsg('Invalid email or password');
    }
  };

  // Handles signup form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await axios.post('http://localhost:8000/signup', {
        email: email,
        password,
      });

      const token = res.data.access_token;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (err) {
      console.error(err);
      setErrorMsg('Signup failed. Please try again');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="branding">
          <img src="/logo.png" alt="MealTime Logo" className="branding-logo" />
          <span className="branding-title">MealTime</span>
        </div>
        <div className="login-header">
          <h1>{isSignup ? 'Sign Up' : 'Welcome back'}</h1>
          <p>{isSignup ? 'Create your account' : 'Please enter your details'}</p>
        </div>

        <form className="login-form" onSubmit={isSignup ? handleSignup : handleLogin}>
          {errorMsg && <p className="error">{errorMsg}</p>}
          <input
            className="login-input"
            type="text"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="login-button">
            {isSignup ? 'Sign Up' : 'Sign in'}
          </button>
          <p className="signup-link">
            {isSignup ? (
              <>
                Already have an account?{' '}
                <a href="#" onClick={() => setIsSignup(false)}>
                  Log in
                </a>
              </>
            ) : (
              <>
                Don’t have an account?{' '}
                <a href="#" onClick={() => setIsSignup(true)}>
                  Sign up
                </a>
              </>
            )}
          </p>
        </form>
      </div>

      <div className="login-right">
        <img src="/login-illustration.png" alt="Login Illustration" className="login-illustration" />
      </div>
    </div>
  );
};

export default Login;