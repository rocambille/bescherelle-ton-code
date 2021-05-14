import Home from './Home';
import Dictation from './Dictation';
import DictationList from './DictationList';

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
