import React from "react";
import LeftNav from "./app/components/LeftNav";
import TopNav from "./app/components/TopNav";
import MainSection from "./app/components/Center";
import RightNav from "./app/components/RightNav";
// import { Counter } from "./state/counter/Counter";
import "./App.scss";

function App(props) {
  console.log(props);
  return (
    <>
      <div className="app">
        <LeftNav />
        <TopNav />
        <MainSection />
        <RightNav />
      </div>
    </>
  );
}

export default App;
