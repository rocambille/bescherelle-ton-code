import React from 'react';
import { Link } from 'react-router-dom';

import { TITLE } from '../constants';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';

function Home() {
  useTitle();

  return (
    <>
      <Title>{TITLE}</Title>
      <ul>
        <li>
          <Link to="/dictations">Les dictées de Robby</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
