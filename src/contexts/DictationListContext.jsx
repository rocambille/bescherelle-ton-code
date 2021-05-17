import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialDictationList = [];

const DictationListContext = createContext(initialDictationList);

function DictationListProvider({ children }) {
  const [dictationList, setDictationList] = useState(initialDictationList);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/rocambille/my-dictations/dications')
      .then((response) => response.json())
      .then((dictations) => setDictationList(dictations));
  }, []);

  return <DictationListContext.Provider value={dictationList}>{children}</DictationListContext.Provider>;
}

DictationListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const useDictationList = () => useContext(DictationListContext);

export { DictationListProvider, useDictationList };
