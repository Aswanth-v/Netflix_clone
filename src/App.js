import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {Action, Originals,Comedy} from './url'
import "./App.css"
import Banner from "./components/Navbar/Banner/Banner";
import Rowpost from "./components/Navbar/Rowpost/Rowpost";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/> 
      <Rowpost  url={Originals} title='Netflix Originals' />
      <Rowpost  url={Action} title='Action' isSmall />
      <Rowpost  url={Comedy} title='Comedy' isSmall />
    </div>
  );
}

export default App;
