import React from 'react';

export default function MainContent() {
  return (
    <main className='main-content'>
      <h1 id="title">Fun facts about React</h1>

      <ul className="fun-facts">
        <li>Was first released in 2013.</li>
        <li>Was originally created by Jordan Walke.</li>
        <li>Has well over 100K stars on Github.</li>
        <li>Is maintained by Facebook.</li>
        <li>Powers thousands of enterprise apps, including mobile apps.</li>
      </ul>
    </main>
  );
}