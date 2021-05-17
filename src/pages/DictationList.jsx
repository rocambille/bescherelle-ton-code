import React from 'react';
import { Link } from 'react-router-dom';

import { useDictationList } from '../contexts';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';

function DictationList() {
  const dictationList = useDictationList();

  useTitle('Les dictées de Robby');

  return (
    <>
      <Link to="/" className="absolute right-4">
        Retour
      </Link>
      <Title>Les dictées de Robby</Title>
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
