import { lazy } from 'react';

import Home from './Home';
const Dictation = lazy(() => import('./Dictation'));
const DictationList = lazy(() => import('./DictationList'));

const pages = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/dictations/:id',
    Component: Dictation,
  },
  {
    path: '/dictations',
    Component: DictationList,
  },
];

export default pages;
