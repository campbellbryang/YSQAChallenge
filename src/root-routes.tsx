import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import { Signin } from './features/Signin/Signin';
import { Users } from './features/Users/Users';

export const ROUTES = {
  BASE_ROUTE: '/',
  LOGIN: '/login',
  SIGN_OUT: '/signout',
};

const ErrorPage = () => <div>There was an error rendering this page.</div>;

export const rootRoutes: RouteObject[] = [
  {
    path: ROUTES.BASE_ROUTE,
    element: (
      <React.Suspense fallback={<>...Loading</>}>
        <Layout />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Users />,
        path: '/users',
        index: true,
      },
      {
        element: <div>Profile</div>,
        path: '/profile',
      },
    ],
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '*',
    errorElement: <ErrorPage />,
    element: <ErrorPage />,
  },
];
