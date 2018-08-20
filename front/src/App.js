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
      let redeemHistory = {...this.state.user.redeemHistory};    
      redeemHistory = prod;                       
      this.setState({redeemHistory})
      //this.setState( { user.redeemHistory: array })
      //console.log('redeemed: ',redeemed)

    }

    getMorePoints() {     
      fetch('https://aerolab-challenge.now.sh/user/points', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc3NGEwMWFkMGE5MzAwNWI3YzRjNDEiLCJpYXQiOjE1MzQ1NDQzODV9.Vp5XnQ37oxa-vXuORjSbFqEsQVwu7Mpk_31ONoxX8pA' 
          },
          body: JSON.stringify({ 'amount': 1000 })
        })
        .then(response => response.json())
        .then(datos => {
          let user = {...this.state.user};    
            user.points = datos['New Points'];                       
            this.setState({user})
        })
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
          <Header 
            user={this.state.user} 
            list={this.state.list}
            getMorePoints={this.getMorePoints.bind(this)} />
        </header>
        <section>
          <Catalog 
            user={this.state.user} 
            list={this.state.list} 
            sortLowestfromParent={this.handleSortLowest} 
            sortHighestfromParent={this.handleSortHighest} 
            sortNewestfromParent={this.handleSortNewest}
            handleRedeemFromParent={this.handleRedeemProduct}
           />
        </section> 
      </div>
    );
  }
}

export default App;
