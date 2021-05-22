import React from 'react';
import { Link } from 'react-router-dom';

import { appName } from '../helpers';
import Title from '../components/Title';
import useTitle from '../hooks/useTitle';

function Home() {
  useTitle();

  return (
    <>
      <Title>{appName()}</Title>
      <ul className="flex flex-col">
        <li>
          <Link to="/spelling-bee">Concours d&apos;orthographe</Link>
        </li>
        <li>
          <Link to="/dictations">Les dictées de Robby</Link>
        </li>
      </ul>
    </>
  );
}

export default Home;
