import React, { Component } from 'react'
import Board from './components/Board'
import './App.css'

class App extends Component{
  render(){
    return(
      <div>
      <h1> Treasure Map! </h1>
        <Board />

      </div>
    )
  }
}

export default App
