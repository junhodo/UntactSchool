import React from 'react';
import '../css/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="loginFormBox">
      <form className="loginForm">
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="authInput"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="authInput"
        />
        <Link to="/admin">
          <input className="authInput authSubmit" type="submit" />
        </Link>
      </form>
    </div>
  );
};

export default Login;
