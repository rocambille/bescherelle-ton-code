import React from 'react';
import PropTypes from 'prop-types';

function Title({ children, className, tag: Tag }) {
  return <Tag className={`${className} text-3xl font-bold`}>{children}</Tag>;
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  tag: PropTypes.string,
};

Title.defaultProps = {
  className: '',
  tag: 'h1',
};

export default Title;
