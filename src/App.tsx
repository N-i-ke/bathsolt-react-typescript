import React from "react";
import "./App.css";
import Main from "./components/Main";
import Salt from './components/Salt';
import Bath from './components/Bath';
import Shop from './components/Shop';

const App: React.FC = () => {
  return (
  <>
    <Main />
    <Salt />
    <Bath />
    <Shop />
  </>
  );
};

export default App;
