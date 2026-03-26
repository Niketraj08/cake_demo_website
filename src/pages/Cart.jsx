import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

const cartItems = [
  { id: 1, name: 'Truffle Chocolate', price: 45.99, qty: 2, size: '1 Kg', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { id: 2, name: 'Strawberry Dream', price: 39.99, qty: 1, size: '1/2 Kg', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' }
];

const Cart = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="container page-wrapper">
      <h1 style={{ fontSize: '2.5rem', color: 'var(--color-accent-dark)', fontWeight: 700, marginBottom: '32px' }}>Shopping Cart</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
        {/* Cart Items */}
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="card" style={{ display: 'flex', padding: '20px', gap: '24px', marginBottom: '20px', alignItems: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{item.name}</h3>
                  <button className="icon-btn" style={{ color: '#ef4444' }}><Trash2 size={20} /></button>
                </div>
                <div style={{ color: 'var(--color-text-light)', fontSize: '14px', marginBottom: '16px' }}>Size: {item.size}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '4px' }}>
                    <button className="icon-btn" style={{ width: '32px', height: '32px', backgroundColor: 'white', borderRadius: '6px' }}><Minus size={14} /></button>
                    <span style={{ width: '40px', textAlign: 'center', fontWeight: 600 }}>{item.qty}</span>
                    <button className="icon-btn" style={{ width: '32px', height: '32px', backgroundColor: 'white', borderRadius: '6px' }}><Plus size={14} /></button>
                  </div>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>${(item.price * item.qty).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
          
          <Link to="/products" style={{ color: 'var(--color-primary)', fontWeight: 600, display: 'inline-block', marginTop: '16px' }}>← Continue Shopping</Link>
        </div>

        {/* Order Summary */}
        <div className="card" style={{ padding: '32px', alignSelf: 'start', position: 'sticky', top: '100px', backgroundColor: 'var(--color-bg)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>Order Summary</h3>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Subtotal</span>
            <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Shipping Estimate</span>
            <span style={{ fontWeight: 600 }}>${shipping.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Tax Estimate</span>
            <span style={{ fontWeight: 600 }}>${(subtotal * 0.05).toFixed(2)}</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '24px 0', borderTop: '1px solid #eee', paddingTop: '24px', fontSize: '1.2rem', fontWeight: 700 }}>
            <span>Order Total</span>
            <span style={{ color: 'var(--color-primary)' }}>${(total + (subtotal * 0.05)).toFixed(2)}</span>
          </div>
          
          <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', height: '56px', fontSize: '1.1rem', justifyContent: 'center' }}>
            Proceed to Checkout
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .page-wrapper > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
