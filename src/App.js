import React, { Component } from "react";
import Form from "./Component/form";
import './App.css'

class App extends Component{
  render() {
    return(
      <div>
        <h1>Employee feedback form</h1>
        <Form/>
      </div>
    )
  }
}
export default App