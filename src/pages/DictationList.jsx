import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DictationContext } from '../contexts/DictationContext';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';

function DictationList() {
  const dictationList = useContext(DictationContext);

  useTitle('La dictée de Robby');

  return (
    <>
      <Link to="/" className="absolute right-4">
        Retour
      </Link>
      <Title>La dictée de Robby</Title>
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
