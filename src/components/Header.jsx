
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Suvidha</Link>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary" onClick={()=>navigate('/login')}>Login</button>
          <button className="btn btn-primary" onClick={()=>navigate('/my-bookings')}>My Bookings</button>
        </div>
      </div>
    </nav>
  );
}
