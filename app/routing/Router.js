import React from 'react';
import {Switch, Route} from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import Editor from 'containers/Editor/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/editor" component={Editor} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}
