import React from 'react';
import PropTypes from 'prop-types';

function Title({ children, tag: Tag }) {
  return <Tag className="text-3xl font-bold">{children}</Tag>;
}

Title.propTypes = {
  children: PropTypes.element.isRequired,
  tag: PropTypes.string,
};

Title.defaultProps = {
  tag: 'h1',
};

export default Title;
