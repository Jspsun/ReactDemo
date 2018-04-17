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
        <li><Link to="/objectdestructuring"> Object destructuring</Link></li>
        <li><Link to="/state"> State</Link></li>
        <li><Link to="/lifecyclemethods"> Life-Cycle Methods</Link></li>
        <li><Link to="/StyledComponent"> Styled Component</Link> </li>
      </ul>

    </React.Fragment>
  );
}
