import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  // location hook to track page enter/exit for page transition animation, location.pathname key prevents animation re-run in the same page
  const location = useLocation();

  return (
    <>
      <Header />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
