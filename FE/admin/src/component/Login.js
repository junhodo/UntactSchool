import React from 'react';
import '../css/Login.css';

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

        <input className="authInput authSubmit" type="submit" />
      </form>
    </div>
  );
};

export default Login;
