import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Filter } from 'lucide-react';

const products = [
  { id: 1, name: 'Truffle Chocolate', price: 45.99, rating: 4.8, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', flavor: 'Chocolate' },
  { id: 2, name: 'Strawberry Dream', price: 39.99, rating: 4.5, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', flavor: 'Strawberry' },
  { id: 3, name: 'Vanilla Caramel', price: 42.50, rating: 4.7, img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', flavor: 'Vanilla' },
  { id: 4, name: 'Red Velvet', price: 48.00, rating: 4.9, img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', flavor: 'Red Velvet' },
  { id: 5, name: 'Lemon Drizzle', price: 35.00, rating: 4.3, img: 'https://images.unsplash.com/photo-1519869325930-281384150729?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', flavor: 'Lemon' },
  { id: 6, name: 'Blueberry Cheesecake', price: 55.00, rating: 4.9, img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', flavor: 'Blueberry' },
];

const Products = () => {
  return (
    <div className="container page-wrapper">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-accent-dark)', fontWeight: 700 }}>Our Cakes</h1>
        <div>
          <select className="input" style={{ width: 'auto', display: 'inline-block' }}>
            <option>Sort by: Popularity</option>
            <option>Sort by: Price (Low to High)</option>
            <option>Sort by: Price (High to Low)</option>
            <option>Sort by: Newest</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '32px' }}>
        {/* Sidebar Filter */}
        <aside className="card" style={{ padding: '24px', alignSelf: 'start', position: 'sticky', top: '100px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: 'var(--color-accent-dark)' }}>
            <Filter size={20} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Filters</h3>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Categories</h4>
            {['All Cakes', 'Birthday', 'Wedding', 'Custom', 'Cupcakes'].map(cat => (
              <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', cursor: 'pointer' }}>
                <input type="checkbox" defaultChecked={cat === 'All Cakes'} style={{ accentColor: 'var(--color-primary)' }} />
                <span>{cat}</span>
              </label>
            ))}
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Price Range</h4>
            <input type="range" min="10" max="100" defaultValue="50" style={{ width: '100%', accentColor: 'var(--color-primary)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '8px' }}>
              <span>$10</span>
              <span>$100+</span>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '12px', fontWeight: 600 }}>Flavor</h4>
            {['Chocolate', 'Vanilla', 'Strawberry', 'Red Velvet', 'Others'].map(flavor => (
              <label key={flavor} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--color-primary)' }} />
                <span>{flavor}</span>
              </label>
            ))}
          </div>
          
          <button className="btn btn-outline" style={{ width: '100%', marginTop: '24px' }}>Apply Filters</button>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-3">
          {products.map(product => (
            <div key={product.id} className="card">
              <Link to={`/products/${product.id}`}>
                <div style={{ overflow: 'hidden', aspectRatio: '1/1' }}>
                  <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="product-img" />
                </div>
              </Link>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>{product.flavor}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', margin: '4px 0 8px 0' }}>
                  <Link to={`/products/${product.id}`}><h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-text)' }}>{product.name}</h3></Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: 600, color: '#b97a00', marginBottom: '16px' }}>
                  <Star size={14} fill="#ffc107" color="#ffc107" />
                  {product.rating} <span style={{ color: 'var(--color-text-light)', fontWeight: 400 }}>(120)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>${product.price.toFixed(2)}</span>
                  <button className="icon-btn" style={{ backgroundColor: 'var(--color-primary)', color: 'white', width: '36px', height: '36px' }}>
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .page-wrapper > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          aside { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Products;
