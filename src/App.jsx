import './index.css';
import React from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { Home, About, Contact } from './routes';
import { Header, Nav, PageTransition } from './components';
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

  if (!routes) return null;

  return (
    <>
      <Header />
      <Nav />
      <AnimatePresence mode='wait'>{React.cloneElement(routes, { key: pathname })}</AnimatePresence>
    </>
  );
}
