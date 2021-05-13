import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DictationContext } from '../contexts/DictationContext';

function DictationList() {
  const dictationList = useContext(DictationContext);

  return (
    <ul>
      {dictationList.map((dictation) => (
        <li key={dictation.id}>
          <Link to={`/dictations/${dictation.id}`}>{dictation.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DictationList;
