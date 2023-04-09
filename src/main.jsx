import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './computent/ErrorPage';
import Home from './computent/Home';
import Blog from './computent/Blog';
import Statistics from './computent/Statistics';



const router = createBrowserRouter([
  {
   path: '/',
   element: <App />,
   errorElement: <ErrorPage />,
   children: [
    {
      path: '/',
      element:<Home />
    },
    {
      path: '/Blog',
      element: <Blog />
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
