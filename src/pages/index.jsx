import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
const Dictation = lazy(() => import('./Dictation'));
const DictationList = lazy(() => import('./DictationList'));
import { DictationListProvider } from '../contexts';

const route = (path, Component) => <Route exact path={path} component={Component} />;

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      <Suspense fallback={<p>Chargement...</p>}>
        <DictationListProvider>
          {route('/dictations/:id', Dictation)}
          {route('/dictations', DictationList)}
        </DictationListProvider>
      </Suspense>
    </Switch>
  );
}

export { Routes };
