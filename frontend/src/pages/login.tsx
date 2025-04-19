import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await axios.post('http://localhost:8000/login', {
        username,
        password,
      });

      const token = res.data.access_token;
      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      setErrorMsg('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
            <h2 className="heading">Login</h2>
            {errorMsg && <p className="error">{errorMsg}</p>}
            <input
            className="login-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" className="login-button">Login</button>
        </form>
    </div>

  );
};

export default Login;
