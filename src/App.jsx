import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { ContextProviders } from './contexts';
import pages from './pages';

function App() {
  return (
    <main className="container mx-auto space-y-4">
      <ContextProviders>
        <BrowserRouter>
          {pages.map(({ path, Component }, index) => (
            <Route key={index} exact path={path} component={Component} />
          ))}
        </BrowserRouter>
      </ContextProviders>
    </main>
  );
}

export default App;
