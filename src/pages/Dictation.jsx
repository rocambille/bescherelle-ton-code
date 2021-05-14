import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

import { DictationContext } from '../contexts/DictationContext';
import CodeEditor from '../components/CodeEditor';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';
import Button from '../components/Button';

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
  const [isValid, setValid] = useState(true);

  const format = (source) => prettier.format(source, { parser: 'babel', plugins: [parserBabel] });

  const showSolution = () => {
    const solution = dictation.steps[currentStepIndex].code;

    setCode(format(solution));
  };

  const checkCode = () => {
    const solution = dictation.steps[currentStepIndex].code;
    const match = format(code) === format(solution);

    setValid(match);

    if (match) {
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
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateRows: '1fr auto' }}>
            <CodeEditor className={!isValid ? 'ring-2 ring-opacity-75 ring-red-400' : ''} code={code} setCode={setCode} />
            {currentStepIndex < dictation.steps.length ? (
              <div className="col-span-1 md:row-start-2 flex">
                <Button className="flex-grow button-secondary" onClick={showSolution}>
                  ???
                </Button>
                <Button className="flex-grow button-primary" onClick={checkCode}>
                  Valider
                </Button>
              </div>
            ) : (
              <p className="col-span-1 md:row-start-2 text-center">Point-virgule final. 20/20 :)</p>
            )}
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
