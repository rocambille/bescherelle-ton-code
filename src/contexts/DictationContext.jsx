import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const initialDictationList = [];

const DictationContext = createContext(initialDictationList);

function DictationProvider({ children }) {
  const [dictationList, setDictationList] = useState(initialDictationList);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/rocambille/my-dictations/dications')
      .then((response) => response.json())
      .then((dictations) => setDictationList(dictations));
  }, []);

  return <DictationContext.Provider value={dictationList}>{children}</DictationContext.Provider>;
}

DictationProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { DictationContext, DictationProvider };
