import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';

import { Routes } from './pages';

function App() {
  return (
    <main className="container mx-auto p-4 space-y-4 min-h-screen flex flex-col relative">
      <HashRouter>
        <Routes />
      </HashRouter>
    </main>
  );
}

export default App;
