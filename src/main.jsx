import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './computent/ErrorPage';

import Blog from './computent/Blog';
import Statistics from './computent/Statistics';

import Homes from './computent/Homes';
import JobDetails from './computent/JobDetails';



const router = createBrowserRouter([
  {
   path: '/',
   element: <App />,
   errorElement: <ErrorPage />,
   children: [
    {
      path: '/',
      element: <Homes />,
      loader:()=>fetch('jobFeatured.json')
    },
    {
      path: '/Blog',
      element: <Blog />
    },
    {
      path: '/job/:jobId',
      element: <JobDetails />,
      loader:()=>fetch('jobFeatured.json')
    },
    {
      path: '/statistics',
      element: <Statistics />
    },
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
