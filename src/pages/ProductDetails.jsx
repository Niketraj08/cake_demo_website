import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, Heart, ShoppingBag, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80');

  const thumbs = [
    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  ];

  return (
    <div className="container page-wrapper">
      {/* Breadcrumb */}
      <div style={{ padding: '0 0 32px 0', display: 'flex', gap: '8px', color: 'var(--color-text-light)', fontSize: '14px' }}>
        <Link to="/" style={{ opacity: 0.8 }}>Home</Link>
        <span>/</span>
        <Link to="/products" style={{ opacity: 0.8 }}>Cakes</Link>
        <span>/</span>
        <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Truffle Chocolate</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        {/* Left: Image Gallery */}
        <div style={{ position: 'sticky', top: '100px' }}>
          <div className="card" style={{ padding: '0', borderRadius: 'var(--radius)', overflow: 'hidden', aspectRatio: '4/4', marginBottom: '20px', cursor: 'zoom-in' }}>
            <img src={activeImg} alt="Cake" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="main-zoom-image" />
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            {thumbs.map((thumb, idx) => (
              <div 
                key={idx} 
                className="card" 
                style={{ flex: 1, aspectRatio: '1/1', padding: '0', borderRadius: 'var(--radius-sm)', cursor: 'pointer', overflow: 'hidden', border: activeImg === thumb ? '2px solid var(--color-primary)' : '2px solid transparent' }}
                onClick={() => setActiveImg(thumb)}
              >
                <img src={thumb} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1.2, color: 'var(--color-accent-dark)' }}>Premium Truffle Chocolate Cake</h1>
            <button className="icon-btn" style={{ backgroundColor: 'var(--color-tertiary)', width: '48px', height: '48px' }}>
              <Heart size={24} color="var(--color-primary)" />
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '2px' }} className="stars">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill={i < 5 ? "#ffc107" : "transparent"} stroke={i < 5 ? "#ffc107" : "#d1d5db"} />)}
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text)' }}>4.8 Rating</span>
            <span style={{ color: 'var(--color-text-light)', fontSize: '14px' }}>(1,284 Reviews)</span>
          </div>

          <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '32px' }}>
            $45.99
            <span style={{ fontSize: '1rem', color: 'var(--color-text-light)', textDecoration: 'line-through', marginLeft: '16px', fontWeight: 400 }}>$55.00</span>
            <span style={{ fontSize: '14px', backgroundColor: '#ffe6ea', color: '#ff3366', padding: '4px 12px', borderRadius: '20px', marginLeft: '16px', verticalAlign: 'middle', fontWeight: 600 }}>Save 15%</span>
          </div>

          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '32px', lineHeight: 1.8 }}>
            Indulge in our signature Truffle Chocolate Cake. Made with rich Belgian chocolate, layered with creamy chocolate ganache, and topped with delicate chocolate curls. Perfect for birthdays, anniversaries, or satisfying your deep chocolate cravings.
          </p>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>Select Size</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['1/2 Kg (4-6 Pcs)', '1 Kg (8-10 Pcs)', '1.5 Kg (12-15 Pcs)', '2 Kg (16-20 Pcs)'].map((size, index) => (
                <button 
                  key={index} 
                  className={`btn ${index === 1 ? 'btn-primary' : 'btn-outline'}`} 
                  style={{ borderRadius: '8px', padding: '12px 16px', fontSize: '14px' }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 'var(--radius-sm)', padding: '4px' }}>
              <button 
                className="icon-btn" 
                style={{ backgroundColor: 'white', borderRadius: '8px', width: '40px', height: '40px', boxShadow: 'var(--shadow-sm)' }}
                onClick={() => setQty(Math.max(1, qty - 1))}
              >
                <Minus size={18} />
              </button>
              <span style={{ width: '48px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 600 }}>{qty}</span>
              <button 
                className="icon-btn" 
                style={{ backgroundColor: 'white', borderRadius: '8px', width: '40px', height: '40px', boxShadow: 'var(--shadow-sm)' }}
                onClick={() => setQty(qty + 1)}
              >
                <Plus size={18} />
              </button>
            </div>
            
            <button className="btn btn-primary" style={{ flex: 1, height: '56px', fontSize: '1.1rem', width: '100%' }}>
              <ShoppingBag size={20} />
              Add to Cart - ${(45.99 * qty).toFixed(2)}
            </button>
            
            <button className="btn btn-secondary" style={{ flex: 1, height: '56px', fontSize: '1.1rem', width: '100%' }}>
              Buy Now
            </button>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', marginBottom: '32px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-text)' }}>
              <div style={{ backgroundColor: 'var(--color-tertiary)', padding: '12px', borderRadius: '50%' }}>
                <Truck size={24} color="var(--color-accent-dark)" />
              </div>
              <div>
                <strong style={{ display: 'block' }}>Free Delivery</strong>
                <span style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>Enter postal code for delivery availability</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--color-text)' }}>
              <div style={{ backgroundColor: '#e5f6ff', padding: '12px', borderRadius: '50%' }}>
                <ShieldCheck size={24} color="#0088cc" />
              </div>
              <div>
                <strong style={{ display: 'block' }}>100% Fresh Guarantee</strong>
                <span style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>Baked only upon order confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .page-wrapper > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          .main-zoom-image:hover { transform: none !important; }
        }
        .main-zoom-image:hover { transform: scale(1.5); }
      `}</style>
    </div>
  );
};

export default ProductDetails;
