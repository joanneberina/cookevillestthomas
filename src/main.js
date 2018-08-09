import React, { Fragment } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { injectGlobal } from "react-emotion";
//import stateless components
import Header from "~/components/header";
import Footer from "~/components/footer";
import Home from "~/components/Home";
import About from "~/components/About";
import Events from "~/components/Events";
import NetlifyCMS from "~/components/Admin";

const App = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route component={About} path="/about" />
          <Route component={Events} path="/events" />
          <Route component={NetlifyCMS} path="/admin" />
          <Footer />
        </div>
      </Router>
    </Fragment>
  );
};

injectGlobal`
  body {
    font-family: Noto sans, sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #2F2F2F;
    line-height: 1.5rem;
    h1, h2, h3, h4, {
        font-family: Raleway, sans-serif;
    }
  }
`;

render(<App />, document.getElementById("app"));
