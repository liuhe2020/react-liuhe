import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, Nav } from './components';
import { Home, About, Contact } from './pages';
import './styles/App.css';

export default function App() {
  // location hook to to get unique pathname as key for children of AnimatePresence
  const location = useLocation();

  // scroll to top on manual page reload/refresh
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
}
