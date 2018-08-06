import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div id="menu">
      <div className="title">Navigation</div>
      <Link className="nav" to="/catalog">Catalog</Link>
      <Link className="nav" to="/submitlink">Submit Link</Link>
      <Link className="nav" to="/myposts">My Posts</Link>
    </div>
  );
};

export default Navigation;