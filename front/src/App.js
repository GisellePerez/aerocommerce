import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Filters from './components/filters/filters';
import Catalog from './components/catalog/catalog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <section>
          <Catalog/>
        </section> 
      </div>
    );
  }
}

export default App;
