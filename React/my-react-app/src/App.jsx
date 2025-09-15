import { useState } from 'react'

import './App.css'

function App() {


  return (
   <>
   {/* Navbar Start */}
<div style={{
  width: '100%',
  background: '#222',
  padding: '0 32px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  height: '64px',
  justifyContent: 'space-between',
  marginBottom: '32px',
}}>
  {/* Left NavLinks */}
  <div style={{ display: 'flex', gap: '24px' }}>
    <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '1.1rem' }}>Home</a>
    <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '1.1rem' }}>About</a>
    <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '1.1rem' }}>Contact</a>
  </div>
  {/* Right NavLinks */}
  <div style={{ display: 'flex', gap: '24px' }}>
    <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '1.1rem' }}>Login</a>
    <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '1.1rem' }}>Signin</a>
  </div>
</div>
{/* Navbar End */}

    {/* Meal Cards Row Start */}
    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '32px 0' }}>
      {/* Card 1 */}
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        maxWidth: '320px',
        background: '#fff',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Grilled Chicken Salad"
          style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        />
        <div style={{ padding: '16px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#333' }}>Grilled Chicken Salad</h2>
          <p style={{ margin: '0 0 12px 0', color: '#666' }}>
            A healthy salad with grilled chicken, greens, tomatoes, and vinaigrette.
          </p>
          <span style={{ color: '#388e3c', fontWeight: 'bold' }}>$12.99</span>
        </div>
      </div>
      {/* Card 2 */}
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        maxWidth: '320px',
        background: '#fff',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Pasta Primavera"
          style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        />
        <div style={{ padding: '16px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#333' }}>Pasta Primavera</h2>
          <p style={{ margin: '0 0 12px 0', color: '#666' }}>
            Classic pasta with fresh vegetables and a light tomato sauce.
          </p>
          <span style={{ color: '#388e3c', fontWeight: 'bold' }}>$10.49</span>
        </div>
      </div>
      {/* Card 3 */}
      <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        maxWidth: '320px',
        background: '#fff',
        overflow: 'hidden',
      }}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Veggie Burger"
          style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        />
        <div style={{ padding: '16px' }}>
          <h2 style={{ margin: '0 0 8px 0', fontSize: '1.3rem', color: '#333' }}>Veggie Burger</h2>
          <p style={{ margin: '0 0 12px 0', color: '#666' }}>
            Tasty burger made with fresh veggies, lettuce, and a whole wheat bun.
          </p>
          <span style={{ color: '#388e3c', fontWeight: 'bold' }}>$8.99</span>
        </div>
      </div>
    </div>
    {/* Meal Cards Row End */}

   </>

  )
}

export default App
