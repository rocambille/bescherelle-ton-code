import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function CodeEditorButtons({ className, isOver, checkCode, showSolution }) {
  return isOver ? (
    <p role="status" className={`${className} text-center`}>
      Point-virgule final. 20/20 :)
    </p>
  ) : (
    <div className={`${className} flex`}>
      <Button className="flex-grow button-secondary" onClick={showSolution}>
        ???
      </Button>
      <Button className="flex-grow button-primary" onClick={checkCode}>
        Valider
      </Button>
    </div>
  );
}

CodeEditorButtons.propTypes = {
  className: PropTypes.string,
  isOver: PropTypes.bool.isRequired,
  checkCode: PropTypes.func.isRequired,
  showSolution: PropTypes.func.isRequired,
};

CodeEditorButtons.defaultProps = {
  className: '',
};

export default CodeEditorButtons;
