import React, { Component } from 'react'
import './App.css'
import Header from './components/header/header'
import Filters from './components/filters/filters'
import Catalog from './components/catalog/catalog'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { info: null }
  }

  componentDidMount() {
    fetch('/info')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ info: data })
        console.log('THIS IS DATA: ', data)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header info={this.state.info} />
        </header>
        <section>
          <Catalog info={this.state.info} />
        </section>
      </div>
    )
  }
}

export default App