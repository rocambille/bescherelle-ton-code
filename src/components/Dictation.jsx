import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { DictationContext } from '../contexts/DictationContext';

function Dictation() {
  const dictationList = useContext(DictationContext);

  const id = (() => {
    const { id } = useParams();
    return parseInt(id, 10);
  })();

  const dictation = dictationList.find((dictation) => dictation.id === id);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    setCurrentStepIndex(0);
  }, [dictation]);

  const code = useRef();

  const checkCode = () => {
    const trimmedCode = code.current.value.replace(/[ \t\n]/g, '');
    const trimmedSolution = dictation.steps[currentStepIndex].code.replace(/[ \t\n]/g, '');

    if (trimmedCode === trimmedSolution) {
      setCurrentStepIndex((previous) => previous + 1);
    }
  };

  return (
    <>
      <Link to="/">Retour</Link>
      {dictation && (
        <>
          <h1>{dictation.title}</h1>
          {currentStepIndex < dictation.steps.length ? (
            <button type="button" onClick={checkCode}>
              Valider
            </button>
          ) : (
            <p>Point(-virgule) final. 20/20 :)</p>
          )}
          <textarea ref={code} />
          <ul>
            {dictation.steps
              .map((step, index) => {
                if (index > currentStepIndex) {
                  return;
                }

                return <li key={step.id}>{step.instruction}</li>;
              })
              .reverse()}
          </ul>
        </>
      )}
    </>
  );
}

export default Dictation;
