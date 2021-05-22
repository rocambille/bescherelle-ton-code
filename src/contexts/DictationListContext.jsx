import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import useFetch from '../hooks/useFetch';

const initialDictationList = [];

const DictationListContext = createContext(initialDictationList);

function DictationListProvider({ children }) {
  const [dictationList] = useFetch('https://my-json-server.typicode.com/rocambille/my-dictations/dictations', initialDictationList);

  return <DictationListContext.Provider value={dictationList}>{children}</DictationListContext.Provider>;
}

DictationListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useDictationList = () => useContext(DictationListContext);

export { DictationListProvider, useDictationList };
