import './App.css'
import React from "react";
import Greeting from "./Gretting.jsx";
import Introduction from "./Introduction.jsx";
import Button from './Button.jsx';

function App() {
    return (
      <div>
        <Greeting name="Martín" />
        <Introduction name ="Jonathan" age="38" profession ="Analista de calidad"/>
        <Button/> 
      </div>
    )
  };

export default App;
