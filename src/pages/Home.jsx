import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <ul>
      <li>
        <Link to="/dictations">La dictée de Robby</Link>
      </li>
    </ul>
  );
}

export default Home;
