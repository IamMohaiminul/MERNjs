/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import { isAuth } from '../../utils';

const AuthRoute = ({ component: Component }) => (
  <Route
    render={(props) =>
      isAuth() === false ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/admin' }} />
      )
    }
  />
);

const AdminRoute = ({ component: Component }) => (
  <Route
    render={(props) =>
      isAuth() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/admin/auth' }} />
      )
    }
  />
);

export { AuthRoute, AdminRoute };
