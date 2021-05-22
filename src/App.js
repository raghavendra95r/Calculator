import './App.css';
import React, { Component } from 'react';
import CalculatorResult from './components/CalculatorResult/CalculatorResult';
import Keypad from './components/Keypad/Keypad';


export default class App extends Component {
  constructor(){
    super();
    this.state={
      result : ""
    }
  }
  onClick = button =>{
    if(button === "Ans"){
      this.calculate()
    }
    else if (button === "C"){
      this.reset()
    }
    else if(button === "CE"){
      this.backspace()
    }
    else{
      this.setState({
        result: this.state.result+ button
      })
    }
  }

  calculate = () => {
   try{
     this.setState({
       result : (eval(this.state.result) || "") + ""
     })
    }
    catch (e) {
      this.setState({result : "error"})
    }
  }

  reset =() => {
    this.setState({result : ""})
  }

  backspace= () => {
    this.setState({result : this.state.result.slice(0,-1)})
  }

  render() {
    return (
      <div className="calculatorBody">
        
        <h1>Calculator</h1>
     
        
        <CalculatorResult result={this.state.result}/>
        <Keypad onClick={ this.onClick} />
        
      </div>
    )
  }
}
