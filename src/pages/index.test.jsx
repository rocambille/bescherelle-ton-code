import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import { Routes } from './index';

jest.mock('../contexts', () => ({
  DictationListProvider: ({ children }) => children,
}));

['/', '/dictations', '/dictations/1'].map((path) =>
  it(`renders ${path}`, () => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <Routes />
      </MemoryRouter>,
    );
  }),
);
