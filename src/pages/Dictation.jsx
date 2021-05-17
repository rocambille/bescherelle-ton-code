import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

const format = (source) => prettier.format(source, { parser: 'babel', plugins: [parserBabel] });

import { DictationContext } from '../contexts/DictationContext';
import CodeEditor from '../components/CodeEditor';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';
import StepList from '../components/StepList';
import CodeEditorButtons from '../components/CodeEditorButtons';

const backLink = (
  <Link to="/dictations" className="absolute right-4">
    Retour
  </Link>
);

function Dictation() {
  const id = parseInt(useParams().id, 10);

  const dictationList = useContext(DictationContext);
  const dictation = dictationList.find((match) => match.id === id);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    setCurrentStepIndex(0);
  }, [dictation]);

  const [code, setCode] = useState('');
  const [isValid, setValid] = useState(true);

  useTitle(dictation?.title);

  if (dictation == null) {
    return backLink;
  }

  return (
    <>
      {backLink}
      <Title>{dictation.title}</Title>
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateRows: '1fr auto' }}>
        <CodeEditor className={!isValid ? 'ring-2 ring-opacity-75 ring-red-400' : ''} code={code} setCode={setCode} />

        <CodeEditorButtons
          className="col-span-1 md:row-start-2"
          isOver={currentStepIndex >= dictation.steps.length}
          checkCode={() => {
            const solution = dictation.steps[currentStepIndex].code;
            const match = format(code) === format(solution);

            setValid(match);

            if (match) {
              setCurrentStepIndex((previous) => previous + 1);
            }
          }}
          showSolution={() => {
            const solution = dictation.steps[currentStepIndex].code;

            setCode(format(solution));
          }}
        />

        <StepList currentStepIndex={currentStepIndex} steps={dictation.steps} />
      </div>
    </>
  );
}

export default Dictation;
