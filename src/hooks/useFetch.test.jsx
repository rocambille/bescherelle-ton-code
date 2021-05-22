import { act, renderHook } from '@testing-library/react-hooks';

import useFetch from './useFetch';

const responses = {
  '200.com': {
    status: 200,
    json: () => Promise.resolve([]),
  },
  '404.com': {
    status: 404,
  },
  'error.com': {
    status: 200,
    /* json: () => Promise.resolve([]), missing body */
  },
};

global.fetch = jest.fn().mockImplementation((url) => {
  return Promise.resolve(responses[url]);
});

it('useFetch with 200', async () => {
  await act(async () => {
    renderHook(() => useFetch('200.com'));
  });
});

it('useFetch with 404', async () => {
  await act(async () => {
    renderHook(() => useFetch('404.com'));
  });
});

it('useFetch with error', async () => {
  await act(async () => {
    renderHook(() => useFetch('error.com'));
  });
});
