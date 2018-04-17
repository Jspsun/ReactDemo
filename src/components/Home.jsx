import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <React.Fragment>
      Navigation
      <ul>
        <li><Link to="/purecomponent"> Pure Component </Link></li>
        <li><Link to="/reactcomponent"> Standard Component</Link></li>
        <li><Link to="/purecomponentwithprops"> Pure Component With Props</Link></li>
        <li><Link to="/reactcomponentwithstate"> Standard Component With State</Link></li>
        <li><Link to="/reactcomponentwithlifecyclemethods"> Standard Component With Life-Cycle Methods</Link></li>
      </ul>

    </React.Fragment>
  );
}
