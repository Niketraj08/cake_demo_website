import React, { useState } from 'react';
import { CreditCard, Wallet, Smartphone, ShieldCheck, Link } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="container page-wrapper">
      <h1 style={{ fontSize: '2.5rem', color: 'var(--color-accent-dark)', fontWeight: 700, marginBottom: '32px' }}>Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '40px' }}>
        {/* Left Form */}
        <div>
          {/* Shipping Address */}
          <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ backgroundColor: 'var(--color-primary)', color: 'white', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1rem' }}>1</span> 
              Shipping Information
            </h2>
            
            <div className="grid grid-cols-2" style={{ gap: '16px', marginBottom: '16px' }}>
              <div className="input-group">
                <label>First Name</label>
                <input type="text" className="input" placeholder="John" />
              </div>
              <div className="input-group">
                <label>Last Name</label>
                <input type="text" className="input" placeholder="Doe" />
              </div>
            </div>

            <div className="input-group" style={{ marginBottom: '16px' }}>
              <label>Phone Number</label>
              <input type="tel" className="input" placeholder="+1 (555) 000-0000" />
            </div>

            <div className="input-group" style={{ marginBottom: '16px' }}>
              <label>Address</label>
              <input type="text" className="input" placeholder="123 Bakery Street" />
            </div>

            <div className="grid grid-cols-2" style={{ gap: '16px' }}>
              <div className="input-group">
                <label>City</label>
                <input type="text" className="input" placeholder="New York" />
              </div>
              <div className="input-group">
                <label>ZIP/Postal Code</label>
                <input type="text" className="input" placeholder="10001" />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ backgroundColor: 'var(--color-primary)', color: 'white', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '1rem' }}>2</span> 
              Payment Method
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div 
                onClick={() => setPaymentMethod('card')} 
                className="card" 
                style={{ cursor: 'pointer', border: paymentMethod === 'card' ? '2px solid var(--color-primary)' : '2px solid transparent', padding: '16px', textAlign: 'center', backgroundColor: paymentMethod === 'card' ? '#fff0f3' : '#fafafa' }}
              >
                <CreditCard size={24} color={paymentMethod === 'card' ? 'var(--color-primary)' : '#666'} style={{ margin: '0 auto 8px' }} />
                <span style={{ fontWeight: 600, fontSize: '14px', color: paymentMethod === 'card' ? 'var(--color-primary)' : '#666' }}>Credit Card</span>
              </div>
              <div 
                onClick={() => setPaymentMethod('upi')} 
                className="card" 
                style={{ cursor: 'pointer', border: paymentMethod === 'upi' ? '2px solid var(--color-primary)' : '2px solid transparent', padding: '16px', textAlign: 'center', backgroundColor: paymentMethod === 'upi' ? '#fff0f3' : '#fafafa' }}
              >
                <Smartphone size={24} color={paymentMethod === 'upi' ? 'var(--color-primary)' : '#666'} style={{ margin: '0 auto 8px' }} />
                <span style={{ fontWeight: 600, fontSize: '14px', color: paymentMethod === 'upi' ? 'var(--color-primary)' : '#666' }}>UPI</span>
              </div>
              <div 
                onClick={() => setPaymentMethod('wallet')} 
                className="card" 
                style={{ cursor: 'pointer', border: paymentMethod === 'wallet' ? '2px solid var(--color-primary)' : '2px solid transparent', padding: '16px', textAlign: 'center', backgroundColor: paymentMethod === 'wallet' ? '#fff0f3' : '#fafafa' }}
              >
                <Wallet size={24} color={paymentMethod === 'wallet' ? 'var(--color-primary)' : '#666'} style={{ margin: '0 auto 8px' }} />
                <span style={{ fontWeight: 600, fontSize: '14px', color: paymentMethod === 'wallet' ? 'var(--color-primary)' : '#666' }}>Razorpay</span>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div style={{ padding: '24px', backgroundColor: '#fafafa', borderRadius: 'var(--radius)', border: '1px solid #eaeaea' }}>
                <div className="input-group" style={{ marginBottom: '16px' }}>
                  <label>Card Number</label>
                  <input type="text" className="input" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2" style={{ gap: '16px' }}>
                  <div className="input-group">
                    <label>Expiration Date</label>
                    <input type="text" className="input" placeholder="MM/YY" />
                  </div>
                  <div className="input-group">
                    <label>CVC</label>
                    <input type="password" className="input" placeholder="123" />
                  </div>
                </div>
              </div>
            )}
            
            {paymentMethod !== 'card' && (
              <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', borderRadius: 'var(--radius)', border: '1px solid #eaeaea' }}>
                <p style={{ color: 'var(--color-text-light)' }}>You will be redirected to the secure payment gateway.</p>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="card" style={{ padding: '32px', alignSelf: 'start', position: 'sticky', top: '100px', border: '1px solid #ffeef1', backgroundColor: '#fffdfd' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>Order Summary</h3>
          
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=150&q=80" alt="cake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '14px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Truffle Chocolate (x2)</span>
                <span>$91.98</span>
              </div>
              <div style={{ color: 'var(--color-text-light)', fontSize: '12px' }}>Size: 1 Kg</div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px dashed #ddd', margin: '24px 0' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Subtotal</span>
            <span style={{ fontWeight: 600 }}>$131.97</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Shipping</span>
            <span style={{ fontWeight: 600 }}>$5.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: 'var(--color-text-light)' }}>Tax (5%)</span>
            <span style={{ fontWeight: 600 }}>$6.60</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', margin: '24px 0', borderTop: '1px solid #eee', paddingTop: '24px', fontSize: '1.5rem', fontWeight: 700 }}>
            <span>Total</span>
            <span style={{ color: 'var(--color-primary)' }}>$143.57</span>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%', height: '56px', fontSize: '1.1rem', justifyContent: 'center' }}>
            <ShieldCheck size={20} />
            Place Order
          </button>
          
          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--color-text-light)', marginTop: '16px' }}>
            By placing your order, you agree to our Terms of Service and Privacy Policy. All payments are secured via 256-bit encryption.
          </p>
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

export default Checkout;
