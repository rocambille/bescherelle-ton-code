import React from 'react';
import { Link } from 'react-router-dom';

import { TITLE } from '../constants';
import useTitle from '../hooks/useTitle';

function Home() {
  useTitle();

  return (
    <>
      <h1>{TITLE}</h1>
      <ul>
        <li>
          <Link to="/dictations">La dictée de Robby</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
