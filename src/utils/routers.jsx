import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { isAuthenticated } from './isAuthenticated';
import Home from 'pages/Home';
import urls from 'static/urls';

export const history = createBrowserHistory();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: urls.ROUTES.LOGIN, state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={urls.ROUTES.HOME} component={Home} />
      {/* <PrivateRoute exact path={urls.ROUTES.LoggedUser} component={User} /> */}
    </Switch>
  </ConnectedRouter>
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: () => {},
};

export default Routes;
