import React from 'react';
import { Link } from 'react-router-dom';

const homeStyles = {
  backgroundColor: '#0d1117',
  color: '#c9d1d9',
  padding: '20px',
};

const buttonStyles = {
  backgroundColor: '#61AFEF',
  color: '#ffffff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
};

function Home() {
  return (
    <div style={homeStyles}>
      <h1>PROYECTO HELIOS</h1>
      <p>Please log in to access your account:</p>
      <Link to="/login">
        <button style={buttonStyles}>Login</button>
      </Link>
    </div>
  );
}

export default Home;
