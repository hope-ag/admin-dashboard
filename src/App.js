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
          <Route exact path="/apps" component={Apps}></Route>
          <Route exact path="/analytics" component={Analythcs}></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/finances" component={Finances}></Route>
          <Route path="/info" component={Help}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/trade" component={MainSection}></Route>
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
