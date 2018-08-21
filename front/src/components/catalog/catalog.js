import React, { Component } from 'react';
import './../../App.css';
import './catalog.css';
import coin from '../../imgs/icons/coin.svg';
//import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight,faShoppingBag } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronCircleLeft, faChevronCircleRight,faShoppingBag);


class Catalog extends Component {

    constructor (props) {
        super(props);
        this.state = { page: 1 }
    }

    setPageOne = (page) => {
        this.setState({page: 1})
    }

    setPageTwo = (page) => {
        this.setState({page: 2})
    }

    sortLowest = () => {
        this.props.sortLowestfromParent(this.props.list);
    }

    sortHighest = () => {
        this.props.sortHighestfromParent(this.props.list);
    }

    sortNewest = () => {
        this.props.sortNewestfromParent(this.props.list);
    }
   
    handleSubmit = (id) =>  {
        fetch('https://aerolab-challenge.now.sh/redeem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc3NGEwMWFkMGE5MzAwNWI3YzRjNDEiLCJpYXQiOjE1MzQ1NDQzODV9.Vp5XnQ37oxa-vXuORjSbFqEsQVwu7Mpk_31ONoxX8pA'
        },
        body: JSON.stringify({'productId': id})
        })
        .then((res) => res.json())
        .then((r) => { console.log(r);
        })
        .catch(err => { console.log('error', err) })
    }

    render() {  
        let item;

        if( this.state.page == 1 ) {
            item = this.props.list.slice(0,16) 
            console.log(item)
        } else {
            item = this.props.list.slice(16)
            console.log(item)
        }

        item = item.map((product,index) => 
            <div key={index} className="product" ref={index}>
                <div className="product-pics-div">
                    <figure className="product-pic">
                        <img src={product.img.url} alt={product.name}/>
                    </figure>
                    <div className="shopping-bag">
                        <FontAwesomeIcon className ='font-awesome' icon={faShoppingBag}/>
                    </div>
                </div>
                <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <p className="product-name">{product.name}</p>
                </div>
                {this.props.user.points > product.cost ?
                    <div className="affordable">
                        <div className="center">
                            <div className="align-affo">
                                <p className="affordable-cost">{product.cost}</p>   
                                <img className="coin" src={coin} alt="Coin icon"/> 
                            </div>  
                            
                            <button onClick={() => { this.handleSubmit(product._id) } }>Redeem Now</button>
                        </div>
                    </div>
                :
                    <div className="not-affordable">
                        <div className="center">  
                            <div className="align-not-affo">
                                <p>{ `You need  ${ product.cost - this.props.user.points }` } </p>
                                <img src={coin} alt='Coin icon'/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
        return (
            <div className="Catalog">
                <section className="filters-section">
                    <div className="filters-first-child">
                        <div className="amount-products">
                            {this.state.page == 1 ? <p>16 of 32 products</p> : <p>32 of 32 products</p> }
                        </div>
                        
                        <div className="filter-buttons-div">
                            <p>Sort by: </p>
                            <button onClick={e => this.sortNewest(e)}>Most Recent</button>
                            <button onClick={e => this.sortLowest(e)}>Lowest Price</button>
                            <button onClick={e => this.sortHighest(e)}>Highest Price</button>
                        </div>
                    </div>

                    <div className="arrows-section">
                        {this.state.page == 1 ?
                            <button id="btn-next" onClick={e => this.setPageTwo(this.state.page)}><FontAwesomeIcon className ='font-awesome' icon={faChevronCircleRight}/></button>
                            :
                            <button id="btn-prev" onClick={e => this.setPageOne(this.state.page)}><FontAwesomeIcon className ='font-awesome' icon={faChevronCircleLeft}/></button>
                        }
                    </div>

                </section> 
                <section className="products-container">
                    {item}
                </section> 
                <div className="final-parent">
                    <div  className="amount-products">
                        {this.state.page == 1 ? <p>16 of 32 products</p> : <p>32 of 32 products</p> }
                    </div>                
                </div>        
            </div>
        )
    }
}

export default Catalog;
