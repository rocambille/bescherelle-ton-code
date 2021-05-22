import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { fakeDictation, route } from '../helpers';
import DictationList from './DictationList';
import { useDictationList } from '../contexts';

jest.mock('../contexts', () => ({
  useDictationList: jest.fn(),
}));

function DictationListRouter() {
  return <MemoryRouter>{route('/', DictationList)}</MemoryRouter>;
}

it(`renders without dictations`, async () => {
  useDictationList.mockImplementation(() => []);

  render(<DictationListRouter />);
});

it(`renders with dictations`, async () => {
  useDictationList.mockImplementation(() => [fakeDictation(1), fakeDictation(2)]);

  render(<DictationListRouter />);
});
