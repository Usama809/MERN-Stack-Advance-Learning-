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
  </>

  )
}

export default App
