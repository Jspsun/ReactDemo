import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import PureComponent from './components/PureComponent';
import PureComponentWithProps from './components/PureComponentWithProps';
import ReactComponent from './components/ReactComponent';
import ReactComponentWithState from './components/ReactComponentWithState';
import ReactComponentWithLifeCycleMethods from './components/ReactComponentWithLifeCycleMethods';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/purecomponent" component={PureComponent} />
        <Route exact path="/reactcomponent" component={ReactComponent} />
        <Route exact path="/purecomponentwithprops" component={PureComponentWithProps} />
        <Route exact path="/reactcomponentwithstate" component={ReactComponentWithState} />
        <Route exact path="/reactcomponentwithlifecyclemethods" component={ReactComponentWithLifeCycleMethods} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('app'),
);

