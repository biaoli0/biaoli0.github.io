import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import TupaiaPage from './components/projects/TupaiaPage';
import TamanuPage from './components/projects/TamanuPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'projects/tupaia',
    element: <TupaiaPage />,
  },
  {
    path: 'projects/tamanu',
    element: <TamanuPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
