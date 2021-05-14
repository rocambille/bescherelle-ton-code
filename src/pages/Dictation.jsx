import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

import { DictationContext } from '../contexts/DictationContext';
import CodeEditor from '../components/CodeEditor';
import Title from '../components/Title';
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
      <Link to="/dictations" className="absolute right-4">
        Retour
      </Link>
      {dictation && (
        <>
          <Title>{dictation.title}</Title>
          {currentStepIndex < dictation.steps.length ? (
            <button type="button" onClick={checkCode}>
              Valider
            </button>
          ) : (
            <p>Point(-virgule) final. 20/20 :)</p>
          )}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
            <CodeEditor code={code} setCode={setCode} />
            <ol className="list-decimal list-inside flex flex-col-reverse justify-end">
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
          </div>
        </>
      )}
    </>
  );
}

export default Dictation;
