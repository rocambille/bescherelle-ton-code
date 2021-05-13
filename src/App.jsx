import React from 'react';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <main className="rsw-container">
      <div
        className="rsw-item"
        style={{
          paddingBottom: '2rem',
        }}>
        <img src={logo} width="20%" alt="WCS logo" />
      </div>
      <div className="rsw-item">
        <p>Welcome to your fresh, lightweight, React App ! &#127752;</p>
      </div>
      <div className="rsw-item">
        <p>
          Start in the <code>App.jsx</code> component !
        </p>
      </div>
    </main>
  );
}

export default App;
