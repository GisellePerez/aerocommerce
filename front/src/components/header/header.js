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
                        <button onClick={e=> { window.location.reload(); this.props.getMorePoints}}>Add points</button>
                        <div className="user-name">
                            <p>{this.props.user.name}</p>
                        </div>
                        <div className="user-points">
                            <p>{this.props.user.points}</p>
                            <img src={coin} alt="coin"/>
                        </div>
                    </div>
                    <figure>
                        <img src={logo} alt="Aerolab logo"/>
                    </figure>
                </div>
                <figure className="main-img">
                    <img src={headerx1} alt="Headphones"></img>
                </figure>
             
            </div>
        )
    }
}

export default Header;