import React from 'react';
import { Route } from 'react-router-dom';

export const appName = () => 'Bescherelle ton code';

export const fakeDictation = (id) => ({
  id,
  title: 'lorem ipsum',
  steps: [
    {
      id: '1',
      instruction: 'lorem foo',
      code: 'function foo() {}',
    },
    {
      id: '2',
      instruction: 'lorem bar',
      code: 'function bar() {}',
    },
  ],
});

export const route = (path, Component) => <Route exact path={path} component={Component} />;
