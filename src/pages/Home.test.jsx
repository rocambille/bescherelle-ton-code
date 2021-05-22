import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { route } from '../helpers';
import Home from './Home';

function HomeRouter() {
  return <MemoryRouter>{route('/', Home)}</MemoryRouter>;
}

it(`renders`, async () => {
  render(<HomeRouter />);
});
