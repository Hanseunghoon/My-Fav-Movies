import React from 'react';
import About from './routes/about'
import Home from './routes/home'
import Detail from './routes/detail'
import Navigation from './components/navigation'
import {HashRouter, Route} from "react-router-dom";
import './App.css';

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;