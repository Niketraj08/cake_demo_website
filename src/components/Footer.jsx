import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '60px 0 20px', marginTop: '60px' }}>
      <div className="container">
        <div className="grid grid-cols-4" style={{ gap: '40px' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>🍰 Cake House</h3>
            <p style={{ opacity: 0.8, fontSize: '14px' }}>Because every celebration deserves a special cake. Let's make your memories sweet.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '16px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', opacity: 0.9 }}>
              <li>Home</li>
              <li>About Us</li>
              <li>Shop Cakes</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '16px' }}>Categories</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', opacity: 0.9 }}>
              <li>Birthday Cakes</li>
              <li>Wedding Cakes</li>
              <li>Custom Orders</li>
              <li>Vegan & Gluten-Free</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '16px' }}>Newsletter</h4>
            <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>Subscribe to get special offers and updates.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input type="email" placeholder="Your email" style={{ padding: '10px 16px', borderRadius: '10px', border: 'none', outline: 'none', flex: 1 }} />
              <button style={{ background: 'var(--color-accent-dark)', color: 'white', padding: '10px 16px', borderRadius: '10px', fontWeight: 'bold' }}>→</button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.7, fontSize: '12px' }}>
          &copy; {new Date().getFullYear()} Cake House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
