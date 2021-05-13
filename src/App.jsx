import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { ContextProviders } from './contexts';
import Dictation from './components/Dictation';
import DictationList from './components/DictationList';

function App() {
  return (
    <main className="rsw-container">
      <ContextProviders>
        <BrowserRouter>
          <Route exact path="/" component={DictationList} />
          <Route exact path="/dictations/:id" component={Dictation} />
        </BrowserRouter>
      </ContextProviders>
    </main>
  );
}

export default App;
