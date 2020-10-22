import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import "./styles/App.css";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/about", name: "About", Component: About },
];

function App() {
  return (
    <>
      <Header />
      <Nav />
      <div className="app">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
        <Footer />
      </div>
    </>
  );
}

export default App;
