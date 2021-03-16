import React from 'react';
import { Switch } from 'react-router-dom';

import CustomRoute from './CustomRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Login} />
      <CustomRoute path="*" component={Page404} />
    </Switch>
  );
}
