import React from 'react';
import { Package, User, Heart, Settings, LogOut, CheckCircle, Clock } from 'lucide-react';

const orders = [
  { id: '#ORD-98421', date: 'Oct 15, 2026', total: 50.99, status: 'Delivered', items: [{ name: 'Strawberry Dream', img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=150&q=80', qty: 1 }] },
  { id: '#ORD-98455', date: 'Nov 02, 2026', total: 45.99, status: 'Preparing', items: [{ name: 'Truffle Chocolate', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=150&q=80', qty: 1 }] },
  { id: '#ORD-98501', date: 'Dec 12, 2026', total: 102.50, status: 'Pending', items: [
    { name: 'Red Velvet', img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&w=150&q=80', qty: 1 },
    { name: 'Blueberry Cheesecake', img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=150&q=80', qty: 1 }
  ]}
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Delivered': return { bg: '#e6f4ea', color: '#137333', icon: <CheckCircle size={16} /> };
    case 'Preparing': return { bg: '#e8f0fe', color: '#1967d2', icon: <Clock size={16} /> };
    case 'Pending': return { bg: '#fff0d4', color: '#b06000', icon: <Clock size={16} /> };
    default: return { bg: '#f1f3f4', color: '#3c4043' };
  }
};

const UserDashboard = () => {
  return (
    <div className="container page-wrapper">
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
        {/* Sidebar */}
        <aside className="card" style={{ padding: '24px', alignSelf: 'start', position: 'sticky', top: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', borderBottom: '1px solid #eee', paddingBottom: '24px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--color-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>JD</span>
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Jane Doe</h3>
              <span style={{ fontSize: '12px', color: 'var(--color-text-light)' }}>jane.doe@example.com</span>
            </div>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button className="btn" style={{ justifyContent: 'flex-start', padding: '12px', width: '100%', backgroundColor: '#fff', color: 'var(--color-text)' }}>
              <User size={20} style={{ marginRight: '12px' }} /> Profile
            </button>
            <button className="btn" style={{ justifyContent: 'flex-start', padding: '12px', width: '100%', backgroundColor: '#fff0f3', color: 'var(--color-primary)', borderRight: '4px solid var(--color-primary)', borderRadius: '0', fontWeight: 600 }}>
              <Package size={20} style={{ marginRight: '12px' }} /> Order History
            </button>
            <button className="btn" style={{ justifyContent: 'flex-start', padding: '12px', width: '100%', backgroundColor: '#fff', color: 'var(--color-text)' }}>
              <Heart size={20} style={{ marginRight: '12px' }} /> Wishlist
            </button>
            <button className="btn" style={{ justifyContent: 'flex-start', padding: '12px', width: '100%', backgroundColor: '#fff', color: 'var(--color-text)' }}>
              <Settings size={20} style={{ marginRight: '12px' }} /> Settings
            </button>
            <button className="btn" style={{ justifyContent: 'flex-start', padding: '12px', width: '100%', backgroundColor: '#fff', color: '#ef4444', marginTop: '24px' }}>
              <LogOut size={20} style={{ marginRight: '12px' }} /> Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-accent-dark)', marginBottom: '32px' }}>Order History</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {orders.map(order => {
              const statusStyle = getStatusColor(order.status);
              
              return (
                <div key={order.id} className="card" style={{ padding: '24px' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid #eee', paddingBottom: '16px' }}>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--color-accent-dark)' }}>Order {order.id}</span>
                      <span style={{ color: 'var(--color-text-light)', fontSize: '14px', marginLeft: '16px' }}>Placed on {order.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: statusStyle.bg, color: statusStyle.color, padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: 600 }}>
                      {statusStyle.icon} {order.status}
                    </div>
                  </div>
                  
                  {/* Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                    {order.items.map((item, index) => (
                      <div key={index} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '8px', overflow: 'hidden' }}>
                          <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontWeight: 600, fontSize: '1rem' }}>{item.name}</h4>
                          <span style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>Qty: {item.qty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', paddingTop: '16px' }}>
                    <div style={{ fontSize: '1.2rem' }}>
                      <span style={{ color: 'var(--color-text-light)' }}>Total: </span>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)' }}>${order.total.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <button className="btn btn-outline" style={{ padding: '8px 20px', fontSize: '14px' }}>View Details</button>
                      <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>Track Order</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

export default UserDashboard;
