import React, { Component } from 'react';
import './../../App.css';
import './catalog.css';

class Catalog extends Component {

    constructor(props) {
        super()
        this.state = { user: null }
    }

    // sortLowest(e) {
    //     e.preventDefault(e);
    //     this.setState(state => ({ list: state.list.sort((a,b) => a.cost - b.cost) }))
    //     console.log('FROM LOWEST: ',this.state.list)
    // }

    // sortHighest(e) {
    //     e.preventDefault(e);
    //     this.setState(state => ({ list: state.list.sort((a,b) => b.cost - a.cost) }))
    //     console.log('FROM HIGHEST: ',this.state.list)
    // }

    render() {
        
        let item = this.props.info[1].map((product,index) => 
            <div key={index} className="product">
                <div className="product-pics-div">
                    <figure className="product-pic">
                        <img src={product.img.url} alt={product.name}/>
                    </figure>
                </div>
                <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <p className="product-name">{product.name}</p>
                </div>
            </div>

        )
        return (
            <div className="Catalog">

                <div className="Filters">
                    {/* {
                    <p>Sort by:</p>
                    <button>Most recent</button>
                    <button onClick={ e => this.sortLowest(e) }>Lowest price</button>
                    <button onClick={ e => this.sortHighest(e) }>Highest price</button>
                    } */}
                    </div>

                <section className="products-container">
                    {this.props.info ? (
                        item
                    ): null}
                </section>
            </div>
        )
    }
}

export default Catalog;