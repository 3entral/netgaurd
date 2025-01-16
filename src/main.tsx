import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SecurityPage from './pages/SecurityPage';
import SeoPage from './pages/SeoPage';
import DevelopmentPage from './pages/DevelopmentPage';
import SolutionsPage from './pages/SolutionsPage';
import ContactPage from './pages/ContactPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/security',
        element: <SecurityPage />,
      },
      {
        path: '/seo',
        element: <SeoPage />,
      },
      {
        path: '/development',
        element: <DevelopmentPage />,
      },
      {
        path: '/solutions',
        element: <SolutionsPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);