import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/App.css';
import Header from './components/Header';
// import Nav from './components/Nav';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Nav from './components/Nav';

export default function App() {
  // location hook to to get unique pathname key for children of AnimatePresence
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
