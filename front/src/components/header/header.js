import React, { Component } from 'react';
import './../../App.css';
import './header.css';
import logo from '../../imgs/aerolab-logo.svg'
import coin from '../../imgs/icons/coin.svg'
import headerx1 from '../../imgs/header-x1.png'

class Header extends Component {

    constructor (props) {
        super(props);
        this.state = { user:[] };
    }

    componentDidMount() {
        fetch('/user')
            .then(re => re.json())
            .then(info => {this.setState({ user:info }); console.log('THIS IS INFO: ',info)})
            .catch(err => console.log(err))
    }

    render() {                       
        return (
            <div className="Header">
                <div className="user-bar">
                    <div className="user-info">
                        <div className="user-name">
                            <p>{this.state.user.name}</p>
                        </div>
                        <div className="user-points">
                            <p>{this.state.user.points}</p>
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