import React from 'react';
import PropTypes from 'prop-types';

function StepList({ currentStepIndex, steps }) {
  return (
    <ol className="list-decimal list-inside flex flex-col-reverse justify-end">
      {steps.map((step, index) => {
        if (index > currentStepIndex) {
          return;
        }

        if (index === currentStepIndex) {
          return (
            <li key={step.id}>
              <strong>{step.instruction}</strong>
            </li>
          );
        }

        return <li key={step.id}>{step.instruction}</li>;
      })}
    </ol>
  );
}

StepList.propTypes = {
  currentStepIndex: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      instruction: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StepList;
