import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './sign-up-modal.css';
import { signUpObject } from '../../../utils/signUp';

function SignUpModal({ showModal, closeModal, showPassword, setShowPassword }) {
  const [firstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSignUp = () => {
    const signUpData = signUpObject(
      firstName,
      LastName,
      email,
      password1,
      password2
    );
    console.log(signUpData);
    setPassword1('');
    setPassword2('');
  };

  if (!showModal) return null;
  return (
    <div className='modal-container'>
      <div className='header-container tw-flex tw-flex-row'>
        <h1 cla>Sign Up</h1>
      </div>
      <div className='form-container'>
        <div className='mb-3'>
          <label for='formGroupExampleInput' className='form-label'>
            First Name
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput' className='form-label'>
            Last Name
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput'
            placeholder='Last Name'
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Email
          </label>
          <input
            type='text'
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Password'
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label for='formGroupExampleInput2' className='form-label'>
            Confirm Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            className='form-control'
            id='formGroupExampleInput2'
            placeholder='Confirm Password'
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <button
            type='button'
            className='btn btn-link'
            onClick={() => setShowPassword(!showPassword)}
            id='hide-btn'
          >
            {showPassword ? 'Hide' : 'Show'} Passwords
          </button>
        </div>
      </div>
      <div className='btn-container'>
        <button
          type='button'
          className='btn btn-success m-1'
          onClick={handleSignUp}
        >
          Sign Up
        </button>
        <button type='button' className='btn btn-dark m1' onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default SignUpModal;
