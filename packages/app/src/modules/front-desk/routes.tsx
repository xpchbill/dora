import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AsyncComponent } from '../../components/async-component';


const Communication = AsyncComponent(() =>
  import(/* webpackChunkName: "FrontDeskCommunication" */ './containers/Communication')
);

const index = () => {
  return <Redirect to="/front-desk/communication" />;
};

const communication = () => {
  return <Communication />;
};

export const FrontDeskRoutes = () => {
  return (
    <React.Fragment>
      <Route
        path="/"
        key="root"
        render={index}
      />
      <Route
        exact={true}
        key="front-desk"
        path="/front-desk"
        render={index}
      />
      <Route
        exact={true}
        key="front-desk/communication"
        path="/front-desk/communication"
        render={communication}
      />
    </React.Fragment>
  );
};

export default FrontDeskRoutes;
