import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex gap-6 p-4 bg-pink-300 text-black text-lg font-semibold">
      <Link to="/" className="hover:underline">All Students</Link>
      <Link to="/favourites" className="hover:underline">Favourite Students</Link>
    </nav>
  );
};

export default Header;
