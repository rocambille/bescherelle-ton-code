import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

import { DictationContext } from '../contexts/DictationContext';
import CodeEditor from '../components/CodeEditor';
import useTitle from '../hooks/useTitle';

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

  const [code, setCode] = useState('');

  const checkCode = () => {
    const format = (source) => prettier.format(source, { parser: 'babel', plugins: [parserBabel] });

    const solution = dictation.steps[currentStepIndex].code;

    if (format(code) === format(solution)) {
      setCurrentStepIndex((previous) => previous + 1);
    }
  };

  useTitle(dictation?.title);

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
          <CodeEditor code={code} setCode={setCode} />
          <ol className="list-decimal list-inside flex flex-col-reverse">
            {dictation.steps.map((step, index) => {
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
        </>
      )}
    </>
  );
}

export default Dictation;
