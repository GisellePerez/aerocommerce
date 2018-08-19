import React, { Component } from 'react';
import './../../App.css';
import './catalog.css';

class Catalog extends Component {

    constructor (props) {
        super(props);
        this.state = { list:[] };
    }

    componentDidMount() {
        fetch('/products')
            .then(resp => resp.json())
            .then(data => {this.setState({ list:data }); console.log('THIS IS DATA: ',data)})
            .catch(err => console.log(err))
    }

    render() {
        let item = this.state.list.map((product,index) => 
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
                <section className="products-container">
                    {item}
                </section>
            </div>
        )
    }
}

export default Catalog;