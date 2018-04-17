import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import PureComponent from './components/PureComponent';
import PureComponentWithProps from './components/PureComponentWithProps';
import ReactComponent from './components/ReactComponent';
import State from './components/State';
import LifeCycleMethods from './components/LifeCycleMethods';
import ObjectDestructuring from './components/ObjectDestructuring';
import StyledComponent from './components/StyledComponent';

ReactDOM.render(
  (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/purecomponent" component={PureComponent} />
        <Route exact path="/reactcomponent" component={ReactComponent} />
        <Route exact path="/purecomponentwithprops" component={PureComponentWithProps} />
        <Route exact path="/State" component={State} />
        <Route exact path="/LifeCycleMethods" component={LifeCycleMethods} />
        <Route exact path="/objectdestructuring" component={ObjectDestructuring} />
        <Route exact path="/StyledComponent" component={StyledComponent} />
      </Switch>
    </BrowserRouter>
  ),
  document.getElementById('app'),
);

