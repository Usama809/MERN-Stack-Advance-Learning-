import { useState } from 'react'

import './App.css'

function App() {

  const name = "Usama";
  const isLoggedIn = true;

  return (
   <>
     <div>
      <h1>Hello, {name} 👋</h1>
      <p>Welcome to React 19 learning!</p>
      <p>Status: {isLoggedIn ? "Online ✅" : "Offline ❌"}</p>
    </div>

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
          src="https://images.unsplash.com/photo-1519864600265-abb23847ef61?auto=format&fit=crop&w=400&q=80"
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
          src="https://images.unsplash.com/photo-1464306076886-debede1a9b12?auto=format&fit=crop&w=400&q=80"
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
