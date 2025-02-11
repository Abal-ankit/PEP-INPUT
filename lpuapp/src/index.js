import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components
import Home, { randomUserLoader } from './components/Day19/Home';
import About from './components/Day19/About';
import Contact from './components/Day19/Contact';
import Root from './routes/Root';
import Products from './components/Day19/Products';
import ErrorPage from './components/Day19/ErrorPage';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <ErrorPage />,
    children : [
      {
        path : '/',
        element : <Home />,
        loader : randomUserLoader
      },
      {
        path : '/contact',
        element : <Contact />
      },
      {
        path : '/about',
        element : <About />
      },
      {
        path : '/products',
        element : <Products />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
