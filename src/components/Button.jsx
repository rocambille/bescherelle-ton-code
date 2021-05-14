import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, className, onClick, tag: Tag }) {
  return (
    <Tag type="button" onClick={onClick} className={`${className} py-2 px-4 focus:outline-none focus:ring-2 focus:ring-opacity-75`}>
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  tag: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  onClick: null,
  tag: 'button',
};

export default Button;
