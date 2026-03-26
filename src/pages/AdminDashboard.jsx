import React, { useState } from 'react';
import { 
  LayoutDashboard, ShoppingBag, Users, DollarSign, Settings, 
  Menu, Bell, Search, TrendingUp, TrendingDown, MoreVertical, Edit, Trash2 
} from 'lucide-react';

const recentOrders = [
  { id: '#ORD-001', customer: 'Alice Smith', date: 'Today, 10:45 AM', amount: '$45.99', status: 'Processing' },
  { id: '#ORD-002', customer: 'Bob Johnson', date: 'Today, 09:12 AM', amount: '$102.50', status: 'Completed' },
  { id: '#ORD-003', customer: 'Charlie Brown', date: 'Yesterday', amount: '$39.99', status: 'Pending' },
  { id: '#ORD-004', customer: 'Dana White', date: 'Yesterday', amount: '$78.00', status: 'Completed' },
  { id: '#ORD-005', customer: 'Eve Davis', date: 'Oct 15, 2026', amount: '$55.00', status: 'Cancelled' },
];

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'products', label: 'Products', icon: <ShoppingBag size={20} /> },
    { id: 'orders', label: 'Orders', icon: <ShoppingBag size={20} /> },
    { id: 'users', label: 'Users', icon: <Users size={20} /> },
    { id: 'payments', label: 'Payments', icon: <DollarSign size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f7fe', margin: '-40px 0' }}>
      {/* Sidebar (Dark) */}
      <aside style={{ width: '280px', backgroundColor: '#111827', color: 'white', display: 'flex', flexDirection: 'column', height: '100vh', position: 'sticky', top: 0 }}>
        <div style={{ padding: '24px', fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-primary)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          🍰 CakeAdmin
        </div>
        <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map(item => (
            <button 
              key={item.id} 
              onClick={() => setActiveMenu(item.id)}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '16px', padding: '12px 16px', borderRadius: '8px', 
                backgroundColor: activeMenu === item.id ? 'var(--color-primary)' : 'transparent', 
                color: activeMenu === item.id ? 'white' : '#9ca3af', 
                border: 'none', cursor: 'pointer', fontSize: '1rem', fontWeight: 500, transition: 'all 0.2s', width: '100%', textAlign: 'left'
              }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Top Header */}
        <header style={{ backgroundColor: 'white', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e5e7eb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="icon-btn"><Menu size={24} /></button>
            <div style={{ position: 'relative' }}>
              <Search size={20} style={{ position: 'absolute', left: '12px', top: '10px', color: '#9ca3af' }} />
              <input type="text" placeholder="Search..." style={{ padding: '10px 16px 10px 40px', borderRadius: '20px', border: '1px solid #e5e7eb', backgroundColor: '#f9fafb', width: '300px', outline: 'none' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="icon-btn" style={{ position: 'relative' }}>
              <Bell size={24} />
              <span style={{ position: 'absolute', top: 0, right: 0, width: '10px', height: '10px', backgroundColor: '#ef4444', borderRadius: '50%' }}></span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid #e5e7eb', paddingLeft: '16px' }}>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#111827', margin: 0 }}>Admin User</p>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Superadmin</p>
              </div>
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" alt="admin" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{ padding: '32px', overflowY: 'auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '24px' }}>Dashboard Overview</h1>
          
          {/* KPI Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {[
              { label: 'Total Sales', value: '$24,592', change: '+12.5%', isUp: true, color: '#10b981' },
              { label: 'Total Orders', value: '1,245', change: '+5.2%', isUp: true, color: '#8b5cf6' },
              { label: 'Active Users', value: '4,592', change: '-2.1%', isUp: false, color: '#f59e0b' },
              { label: 'Total Revenue', value: '$112,400', change: '+18.2%', isUp: true, color: '#3b82f6' }
            ].map((kpi, index) => (
              <div key={index} style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                <div style={{ color: '#6b7280', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>{kpi.label}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>{kpi.value}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600, color: kpi.isUp ? '#10b981' : '#ef4444' }}>
                  {kpi.isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {kpi.change} <span style={{ color: '#9ca3af', fontWeight: 400, marginLeft: '4px' }}>vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Area */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' }}>
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Revenue Trends (Mock Chart)</h2>
              <div style={{ height: '250px', display: 'flex', alignItems: 'flex-end', gap: '12px', padding: '16px 0', borderBottom: '1px solid #e5e7eb', borderLeft: '1px solid #e5e7eb' }}>
                {/* Mock Bars */}
                {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                  <div key={i} style={{ flex: 1, backgroundColor: 'var(--color-primary)', height: `${h}%`, borderRadius: '4px 4px 0 0', position: 'relative' }}>
                    <div style={{ position: 'absolute', bottom: '-24px', left: '50%', transform: 'translateX(-50%)', fontSize: '12px', color: '#6b7280' }}>Day {i+1}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111827', marginBottom: '16px' }}>Sales by Category</h2>
              <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {/* Mock Donut Chart */}
                <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: 'conic-gradient(var(--color-primary) 0% 40%, var(--color-accent) 40% 70%, #fbd38d 70% 90%, #e2e8f0 90% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '130px', height: '130px', backgroundColor: 'white', borderRadius: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#111827' }}>Recent Orders</h2>
              <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '14px' }}>View All</button>
            </div>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e5e7eb', color: '#6b7280', fontSize: '14px' }}>
                  <th style={{ padding: '16px 8px', fontWeight: 500 }}>Order ID</th>
                  <th style={{ padding: '16px 8px', fontWeight: 500 }}>Customer</th>
                  <th style={{ padding: '16px 8px', fontWeight: 500 }}>Date</th>
                  <th style={{ padding: '16px 8px', fontWeight: 500 }}>Amount</th>
                  <th style={{ padding: '16px 8px', fontWeight: 500 }}>Status</th>
                  <th style={{ padding: '16px 8px', fontWeight: 500, textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '14px', color: '#111827' }}>
                {recentOrders.map((order, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '16px 8px', fontWeight: 600 }}>{order.id}</td>
                    <td style={{ padding: '16px 8px' }}>{order.customer}</td>
                    <td style={{ padding: '16px 8px', color: '#6b7280' }}>{order.date}</td>
                    <td style={{ padding: '16px 8px', fontWeight: 600 }}>{order.amount}</td>
                    <td style={{ padding: '16px 8px' }}>
                      <span style={{ 
                        padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 600,
                        backgroundColor: order.status === 'Completed' ? '#d1fae5' : order.status === 'Processing' ? '#dbe1ff' : order.status === 'Pending' ? '#fef3c7' : '#fee2e2',
                        color: order.status === 'Completed' ? '#065f46' : order.status === 'Processing' ? '#1e40af' : order.status === 'Pending' ? '#92400e' : '#991b1b'
                      }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 8px', textAlign: 'right' }}>
                      <button className="icon-btn" style={{ display: 'inline-flex', width: '32px', height: '32px', color: '#6b7280' }}><Edit size={16} /></button>
                      <button className="icon-btn" style={{ display: 'inline-flex', width: '32px', height: '32px', color: '#ef4444' }}><Trash2 size={16} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
