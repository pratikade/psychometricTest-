import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">🎯</div>
            <h1>CareerGuide</h1>
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link active">Home</Link>
            <Link to="/assessment/after-10th" className="nav-link">Assessments</Link>
            <Link to="/" className="nav-link">About</Link>
            <Link to="/" className="nav-link">Contact</Link>
          </nav>
          <div className="header-actions">
            <Link to="/assessment/after-10th" className="btn btn-primary header-btn">
              Start Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
