import React from 'react';
import PropTypes from 'prop-types';

import { DictationContext, DictationProvider } from './DictationContext';

function ContextProviders({ children }) {
  return <DictationProvider>{children}</DictationProvider>;
}

ContextProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

export { DictationContext, ContextProviders };
