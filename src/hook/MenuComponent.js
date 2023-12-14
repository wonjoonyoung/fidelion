// MenuComponent.js

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function MenuComponent() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <Link to="/">Fidelion</Link>
      <Link to="/harrier">Harrier</Link>
      <Link to="/utility">Utility</Link>
      <Link to="/about">About</Link>
      <button onClick={handleMenuClick}>Reload Current Page</button>
    </div>
  );
}

export default MenuComponent;
