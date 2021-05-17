import React, { Suspense } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';

import { ContextProviders } from './contexts';
import pages from './pages';

function App() {
  return (
    <main className="container mx-auto p-4 space-y-4 min-h-screen flex flex-col relative">
      <ContextProviders>
        <HashRouter>
          <Suspense fallback={<p>Chargement...</p>}>
            {pages.map(({ path, Component }, index) => (
              <Route key={index} exact path={path} component={Component} />
            ))}
          </Suspense>
        </HashRouter>
      </ContextProviders>
    </main>
  );
}

export default App;