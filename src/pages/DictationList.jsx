import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DictationContext } from '../contexts/DictationContext';
import useTitle from '../hooks/useTitle';

function DictationList() {
  const dictationList = useContext(DictationContext);

  useTitle('La dictée de Robby');

  return (
    <>
      <h1>La dictée de Robby</h1>
      <ul>
        {dictationList.map((dictation) => (
          <li key={dictation.id}>
            <Link to={`/dictations/${dictation.id}`}>{dictation.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DictationList;
