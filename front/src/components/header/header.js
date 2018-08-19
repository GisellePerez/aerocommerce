import React, { Component } from 'react'
import './../../App.css'
import './header.css'
import logo from '../../imgs/aerolab-logo.svg'
import coin from '../../imgs/icons/coin.svg'
import headerx1 from '../../imgs/header-x1.png'
import { timingSafeEqual } from 'crypto'

class Header extends Component {
  constructor(props) {
    super()
    this.state = { user: null }
  }

  render() {
    return (
      <div className="Header">
        {this.props.info ? (
          <div className="user-bar">
            <div className="user-info">
              <div className="user-name">
                <p>{this.props.info[0].name}</p>
              </div>
              <div className="user-points">
                <p>{this.props.info[0].points}</p>
                <img src={coin} alt="coin" />
              </div>
            </div>
            <figure>
              <img src={logo} alt="Aerolab logo" />
            </figure>
          </div>
        ) : null}
        <figure className="main-img">
          <img src={headerx1} alt="Headphones" />
        </figure>
      </div>
    )
  }
}

export default Header