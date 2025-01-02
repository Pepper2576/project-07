import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <div>
      <nav className='navbar bg-body-tertiary '>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img
              src='data:image/png;base64,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'
              alt='Logo'
              width='30'
              height='24'
              className='d-inline-block align-text-top mr-4'
            />
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
