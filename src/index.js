import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { LinkContext } from './Context/linkContext';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LinkContext>
  <RouterProvider router={router}/>
  </LinkContext>
);