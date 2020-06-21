import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AsyncComponent } from '../../components/async-component';
import AuthMainLayout from './components/AuthMainLayout';

const SignIn = AsyncComponent(() =>
  import(/* webpackChunkName: "SignIn" */ './containers/SignIn'),
);

const index = () => {
  return <Redirect to="/signin" />;
};

export const AuthRoutes = () => {
  return (
    <AuthMainLayout>
      <Switch>
        {/* <Route path="/forgot-password" exact={true} component={forgotPassword} /> */}
        {/* <Route path="/reset-password" exact={true} component={resetPassword} /> */}
        <Route path="/signin" exact={true} component={SignIn} />
        <Route path="*" render={index} />
      </Switch>
    </AuthMainLayout>
  );
};

export default AuthRoutes;
