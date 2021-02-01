import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import LeftNav from "./app/components/LeftNav";
import TopNav from "./app/components/TopNav";
import MainSection from "./app/components/Center";
import RightNav from "./app/components/RightNav";
import Apps from "./app/components/Center/Apps";
import Analythcs from "./app/components/Center/Analytics";
import Education from "./app/components/Center/Education";
import Finances from "./app/components/Center/Finances";
import Help from "./app/components/Center/Help";
import Profile from "./app/components/Center/Profile";
import Trade from "./app/components/Center/Trade";

// import { Counter } from "./state/counter/Counter";
import "./App.scss";

function App(props) {
  console.log(props);
  return (
    <>
      <div className="app">
        <LeftNav />
        <RightNav />
        <TopNav />
        <Switch>
          <Route exact path="/" component={MainSection}></Route>
          <Route path="/apps" component={Apps}></Route>
          <Route path="/analytics" component={Analythcs}></Route>
          <Route path="/education" component={Education}></Route>
          <Route path="/finances" component={Finances}></Route>
          <Route path="/help" component={Help}></Route>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/trade" component={MainSection}></Route>
          <Route path="/">
            <div className="column">
              <h1>404</h1>
              <h3>The requested page could not be found</h3>
              <Link to="/">Go home</Link>
            </div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
