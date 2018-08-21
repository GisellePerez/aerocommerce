import React, { Component } from 'react';
import './../../App.css';
import './header.css';
import logo from '../../imgs/aerolab-logo.svg'
import coin from '../../imgs/icons/coin.svg'
import headerx1 from '../../imgs/header-x1.png'

class Header extends Component {

    constructor (props) {
        super(props);
    }

    render() {                       
         return (
             <div className="Header">
                <div className="user-bar">
                    <div className="user-info">
                        <div className="main-user">
                            <div className="user-name">
                                <p>{this.props.user.name}</p>
                            </div>
                            <div className="user-points">
                                <p>{this.props.user.points}</p>
                                <img className="coin" src={coin} alt="coin"/>
                            </div>
                        </div>
                        <button id="btn-points"onClick={this.props.getMorePoints}>I want more points!</button>
                    </div>
                    <figure>
                        <img id="logo" src={logo} alt="Aerolab logo"/>
                    </figure>
                </div>
                <div className="header-pic-container">
                    <figure className="main-img">
                        <img src={headerx1} alt="Headphones"></img>
                    </figure>
                    <h1>Electronics</h1>
                </div>
            </div>
        )
    }
}

export default Header;