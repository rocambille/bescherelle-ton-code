import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import { route } from '../helpers';
import Home from './Home';
const Dictation = lazy(() => import('./Dictation'));
const DictationList = lazy(() => import('./DictationList'));
import { DictationListProvider } from '../contexts';

function Routes() {
  return (
    <Switch>
      {route('/', Home)}
      <Suspense fallback={<p>Chargement...</p>}>
        <DictationListProvider>
          <>
            {route('/dictations', DictationList)}
            {route('/dictations/:id', Dictation)}
          </>
        </DictationListProvider>
      </Suspense>
    </Switch>
  );
}

export { Routes };
