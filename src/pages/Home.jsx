import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';

const products = [
  { id: 1, name: 'Truffle Chocolate', price: 45.99, rating: 4.8, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Strawberry Dream', price: 39.99, rating: 4.5, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Vanilla Caramel', price: 42.50, rating: 4.7, img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'Red Velvet', price: 48.00, rating: 4.9, img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const categories = [
  { id: 1, name: 'Birthday Cakes', icon: '🎂', bg: '#ffe5e5' },
  { id: 2, name: 'Wedding Cakes', icon: '🕊️', bg: '#f0e6ff' },
  { id: 3, name: 'Custom Cakes', icon: '🎨', bg: '#e5f6ff' },
  { id: 4, name: 'Cupcakes', icon: '🧁', bg: '#fff0e5' },
];

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#ffb6c122', padding: '60px 0', borderRadius: '0 0 40px 40px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '40px', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px', color: 'var(--color-accent-dark)' }}>
              Baked with <br /> <span style={{ color: 'var(--color-primary)' }}>Love</span> & Magic
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '32px', color: 'var(--color-text-light)' }}>
              Discover our exquisite collection of premium cakes for every special moment. Handcrafted daily with the finest ingredients.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/products" className="btn btn-primary">
                Order Now
              </Link>
              <Link to="/products" className="btn btn-outline">
                View Menu
              </Link>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: -20, right: -20, width: 200, height: 200, backgroundColor: 'var(--color-primary)', borderRadius: '50%', opacity: 0.1, zIndex: 0 }}></div>
            <img 
              src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Delicious Cake" 
              style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-lg)', position: 'relative', zIndex: 1, aspectRatio: '4/3', objectFit: 'cover' }} 
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-wrapper container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-accent-dark)' }}>Shop by Category</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Find the perfect cake for your occasion</p>
          </div>
        </div>
        
        <div className="grid grid-cols-4">
          {categories.map(cat => (
            <div key={cat.id} className="card" style={{ padding: '32px 20px', textAlign: 'center', backgroundColor: cat.bg, cursor: 'pointer', border: 'none' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{cat.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="page-wrapper container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-accent-dark)' }}>Featured Delights</h2>
            <p style={{ color: 'var(--color-text-light)' }}>Our most loved and reviewed cakes</p>
          </div>
          <Link to="/products" style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-4">
          {products.map(product => (
            <div key={product.id} className="card">
              <Link to={`/products/${product.id}`}>
                <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
                  <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                </div>
              </Link>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <Link to={`/products/${product.id}`}><h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{product.name}</h3></Link>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600, backgroundColor: '#fff9e6', padding: '4px 8px', borderRadius: '12px', color: '#b97a00' }}>
                    <Star size={14} fill="#ffc107" color="#ffc107" />
                    {product.rating}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>${product.price.toFixed(2)}</span>
                  <button className="icon-btn" style={{ backgroundColor: 'var(--color-primary)', color: 'white', width: '36px', height: '36px' }}>
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section .container {
            grid-template-columns: 1fr !important;
          }
        }
        .product-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default Home;
