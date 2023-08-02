import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Succes from './pages/Succes'
import Navbar from './Component/Navbar';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    )
  }
}

