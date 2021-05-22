import React from 'react';
import { render } from '@testing-library/react';

import { DictationListProvider, useDictationList } from './DictationListContext';

jest.mock('../hooks/useFetch', () => (url, initialState) => [initialState]);

function Foo() {
  const dictationList = useDictationList();
  return dictationList.length;
}

it('renders DictationListProvider', () => {
  render(
    <DictationListProvider>
      <Foo />
    </DictationListProvider>,
  );
});
