import React, { Component } from 'react';
import './../../App.css';
import './catalog.css';
import coin from '../../imgs/icons/coin.svg'



class Catalog extends Component {

    constructor (props) {
        super(props);
        //this.state = { list:[] };
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

    render() {
        
        let item = this.props.list.map((product,index) => 
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
                        <button> Redeem Now </button>
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
                    <button onClick={e => this.sortNewest(e)}>Latest</button>
                    <button onClick={e => this.sortLowest(e)}>Lowest Price</button>
                    <button onClick={e => this.sortHighest(e)}>Highest Price</button>
                </section> 
                <section className="products-container">
                    {item}
                </section> 
            </div>
        )
    }
}

export default Catalog;
