import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { rootRoutes } from './root-routes';
import React from 'react';

export const router = createBrowserRouter([...rootRoutes]);

function App() {
  return (
    <React.Suspense>
      <CssBaseline />
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default App;
