import React, { useState } from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import parserBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

const format = (source) => prettier.format(source, { parser: 'babel', plugins: [parserBabel] });

import { useDictationList } from '../contexts';
import CodeEditor from '../components/CodeEditor';
import CodeEditorButtons from '../components/CodeEditorButtons';
import StepList from '../components/StepList';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';

const backLink = (
  <Link to="/dictations" className="absolute right-4">
    Retour
  </Link>
);

function Dictation() {
  const id = parseInt(useParams().id, 10);

  const dictationList = useDictationList();
  const dictation = dictationList.find((match) => parseInt(match.id, 10) === id);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [code, setCode] = useState('');
  const [isValid, setValid] = useState(true);

  useTitle(dictation?.title);

  if (dictationList.length === 0) {
    // list is not ready: wait for it, or leave the page
    return backLink;
  }

  if (dictation == null) {
    // id is not valid
    return <Redirect to="/dictations" />;
  }

  const editorId = 'dictation-editor';

  return (
    <>
      {backLink}
      <Title>{dictation.title}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ gridTemplateRows: '1fr auto' }}>
        <CodeEditor id={editorId} className={!isValid ? 'ring-2 ring-opacity-75 ring-red-400' : ''} code={code} setCode={setCode} />

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

        <StepList currentStepIndex={currentStepIndex} editorId={editorId} steps={dictation.steps} />
      </div>
    </>
  );
}

export default Dictation;
