import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import About from "./About";
import Faq from "./Faq";
import Info from "./Info";
import Terms from "./Terms";
import InnerNav from "../InnerNav";
import "./Help.scss";

function Help() {
  return (
    <div className="help ">
      <div className="container">
        <div className="inner-nav">
          <InnerNav className="shadow">
            <li className="active">
              <Link to="/info">Help</Link>
            </li>
            <li>
              <Link to="/info/about">About</Link>
            </li>
            <li>
              <Link to="/info/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/info/terms">Terms & Conditions</Link>
            </li>
          </InnerNav>
        </div>
        <Switch>
          <Route exact path="/info/about">
            <About />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route exact path="/info/terms">
            <Terms />
          </Route>
          <Route exact path="/info/faq">
            <Faq />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Help;
