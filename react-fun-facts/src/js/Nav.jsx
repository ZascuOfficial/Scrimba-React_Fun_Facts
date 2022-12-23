import React from 'react';

import logo from '../img/react-logo.png';

export default function Nav() {
  return (
    <nav className='nav'>
      <img src={logo} alt="react-logo" className="react-logo" />

      <h3 id="subtitle">ReactFacts</h3>

      <p id="project-intro">React Course - Project 1</p>
    </nav>
  );
}