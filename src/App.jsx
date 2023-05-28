import './index.css';
import React, { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { Home, About, Contact } from './routes';
import { Header, Nav } from './components';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
  ]);

  const { pathname } = useLocation();

  // scroll to top on manual page reload/refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  if (!routes) return null;

  return (
    <>
      <Header />
      <Nav />
      <AnimatePresence mode='wait'>{React.cloneElement(routes, { key: pathname })}</AnimatePresence>
    </>
  );
}
