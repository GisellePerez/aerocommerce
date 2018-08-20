import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Filters from './components/filters/filters';
import Catalog from './components/catalog/catalog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

class App extends Component {

    constructor(props) {
      super(props)
      this.state = { 
        list: [],
        user: []
      }
    }

    handleSortLowest = (products) => {
      let sorted = products.sort((a,b) => a.cost - b.cost);
      this.setState({ list:sorted })
      console.log(sorted);
    }

    handleSortHighest = (products) => {
      let sorted = products.sort((a,b) => b.cost - a.cost);
      console.log(sorted);
      this.setState({ list:sorted })
    }

    handleSortNewest = (products) => {
      let sorted = products.sort((a,b) => b.id - a.id);
      this.setState({ list:sorted })
      console.log(sorted);
    }

    handleRedeemProduct(prod) {
      let redeemed = this.prod.refs;
      console.log(redeemed)
    }

    componentDidMount() {
      fetch('/info')
        .then(response => response.json())
        .then(data => { this.setState({ list: data[1] , user: data[0] })})
        .catch(err => console.log(err))
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header user={this.state.user} list={this.state.list} />
        </header>
        <section>
          <Catalog user={this.state.user} list={this.state.list} sortLowestfromParent={this.handleSortLowest} sortHighestfromParent={this.handleSortHighest} sortNewestfromParent={this.handleSortNewest}/>
        </section> 
      </div>
    );
  }
}

export default App;
