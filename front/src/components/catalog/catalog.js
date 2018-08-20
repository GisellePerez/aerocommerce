import React, { Component } from 'react';
import './../../App.css';
import './catalog.css';
import coin from '../../imgs/icons/coin.svg';
import { BrowserRouter as Router } from 'react-router-dom';



class Catalog extends Component {

    constructor (props) {
        super(props);
        this.page = 1;
    }

    setPageOne = (page) => {
        this.page = 1;
        // this.props.list = this.props.list.slice(0,16);
        // console.log(page)
    }

    setPageTwo = (page) => {
        this.page = 2;
        // this.props.list = this.props.list.slice(17,33);
        // console.log(page)
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
        .then((r) => { /*alert('Product successfully purchased')*/
            console.log(r)
            console.log(this.props.user.redeemHistory)

            this.props.handleRedeemFromParent(this.user.redeemHistory);
        })
        .catch(error => { console.log('request failed', error) })
    }

    render() {      
        
        // let itemsPerPage;        
        // // let itemsPerPage = page != 2 ?  this.props.list.slice(0,16) : this.props.list.slice(17,33)
        // // console.log(itemsPerPage)
        // // if(page != 2) { itemsPerPage = this.props.list.slice(0,16); 
        
        // itemsPerPage = this.props.list.slice(0,16); 
        // let page2 = this.props.list.slice(17,33)
        //page.push(itemsPerPage);
        // 
        let item;
        if(this.page != 2 ) {
            item = this.props.list.slice(0,16)
 
        }else {
            item = this.props.slice(16)
        }
        item.map((product,index) => 
            <div key={index} className="product" ref={index}>
                <div className="product-pics-div">
                    <figure className="product-pic">
                        <img src={product.img.url} alt={product.name}/>
                    </figure>
                </div>
                <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <p className="product-name">{product.name}</p>
                </div>
                {this.props.user.points > product.cost ?
                    <div className="affordable">
                        <p>{product.cost}</p>
                        <button onClick={() => this.handleSubmit(product._id)}>Redeem Now</button>
                    </div>
                :
                    <div className="not-affordable">
                        <p>{ `You need  ${ product.cost - this.props.user.points }` } <span><img src={coin} alt='Coin icon'/></span></p>
                    </div>
                }
            </div>
        )
        return (
            <div className="Catalog">
                
                <section>
                    <div>
                        <button onClick={e => this.setPageOne(this.page)}>Prev</button>
                        <button onClick={e => this.setPageTwo(this.page)}>Next</button>
                    </div>
                    <div>
                        <button onClick={e => this.sortNewest(e)}>Latest</button>
                        <button onClick={e => this.sortLowest(e)}>Lowest Price</button>
                        <button onClick={e => this.sortHighest(e)}>Highest Price</button>
                    </div>
                </section> 
                <section className="products-container">
                    {item}
                </section> 
            </div>
        )
    }
}

export default Catalog;
