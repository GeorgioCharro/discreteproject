import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar bg-base-100 bordered border-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Discrete Maths</Link>
      </div>
      <div className="navbar-end">
        <Link to="/about-page" className="btn">About Page</Link>
      </div>
    </div>
  );
}

export default Header;
