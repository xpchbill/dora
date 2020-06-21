import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom';
import { AuthRoutes } from './modules/auth';
import { FrontDeskRoutes } from './modules/front-desk';
import { AsyncComponent } from './components';
import {
  withAuthority,
  AuthorityProps,
} from './modules/auth/containers/withAuthority';

const PageLayout = AsyncComponent(() =>
  import(/* webpackChunkName: "MainLayout" */ './layout/PageLayout'),
);

const index = () => {
  return <Redirect to="/front-desk" />;
};

const renderRoutes = ({ token, currentUser }: AuthorityProps) => {
  if (token && currentUser) {
    return (
      <>
        <PageLayout currentUser={currentUser}>
          <Switch>
            {/* <Loading /> */}
            <FrontDeskRoutes />
            <Route path="*" render={index} />
          </Switch>
        </PageLayout>
      </>
    );
  }

  return (
    !token && (
      <Switch>
        <AuthRoutes />
      </Switch>
    )
  );
};

const Routes = (authorityProps: AuthorityProps) => (
  <Router>
    <>{renderRoutes(authorityProps)}</>
  </Router>
);

export default withAuthority(Routes);
