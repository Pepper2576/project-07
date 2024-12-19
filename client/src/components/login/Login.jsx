import React, { useEffect, useState } from 'react';
import SignUpModal from '../signup-modal/SignUpModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './login.css';
import { loginObject } from '../../../utils/login';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleLogin = () => {
    const loginData = loginObject(email, password);
    console.log(loginData);
    setPassword('');
  };

  return (
    <>
      <SignUpModal
        showModal={showModal}
        closeModal={closeModal}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <div className='login-container tw-h-96 tw-w-96 tw-mt-11 tw-flex tw-flex-col '>
        <div className='header-container tw-mt-10 tw-ml-10'>
          <h1>Login</h1>
        </div>

        <div className='input-container tw-m-10'>
          <label htmlFor='email'>Enter email</label>
          <br></br>
          <input
            type='text'
            className='tw-bg-slate-200 tw-border-black tw-rounded'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <label htmlFor='password'>Enter password</label>
          <br></br>
          <input
            type={showPassword ? 'text' : 'password'}
            className='tw-bg-slate-200 tw-rounded'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            className='btn btn-link'
            onClick={() => setShowPassword(!showPassword)}
            id='hide-btn'
          >
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </div>
        <div className='btn-container tw-flex tw-flex-row tw-justify-center tw-mt-2'>
          <button
            type='button'
            className='btn btn-primary m-1'
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            type='button'
            className='btn btn-primary m-1'
            onClick={openModal}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
