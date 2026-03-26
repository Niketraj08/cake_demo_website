import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #f0e6e6' }}>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <span style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>🍰</span>
            Cake House
          </Link>
          
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Categories</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          <div className="nav-icons">
            <button className="icon-btn">
              <Search size={20} />
            </button>
            <Link to="/login" className="icon-btn" title="Login/Signup">
              <User size={20} />
            </Link>
            <Link to="/cart" className="icon-btn" title="Cart">
              <ShoppingBag size={20} />
              <span className="badge">3</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
