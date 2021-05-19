import React from 'react';
import PropTypes from 'prop-types';

function StepList({ currentStepIndex, editorId, steps }) {
  const currentStep = steps[currentStepIndex];

  return (
    <ol className="list-decimal list-inside flex flex-col-reverse justify-end">
      {steps.slice(0, currentStepIndex).map((step) => {
        return <li key={step.id}>{step.instruction}</li>;
      })}
      {currentStep && (
        <li className="font-bold text-lg">
          <label htmlFor={editorId}>{currentStep.instruction}</label>
        </li>
      )}
    </ol>
  );
}

StepList.propTypes = {
  currentStepIndex: PropTypes.number.isRequired,
  editorId: PropTypes.string.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      instruction: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default StepList;
