import React from 'react';
import Header from '../component/Header';
import Login from '../component/Login';
import '../App.css';

const LoginPage = () => {
  return (
    <div className="App">
      <Header />
      <Login />
      <div className="Content" />
    </div>
  );
};

export default LoginPage;
