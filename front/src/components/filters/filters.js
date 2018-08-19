import React, { Component } from 'react';
import './../../App.css';
import './filters.css';

class Filters extends Component {
    render() {
        return (
            <div className="Filters">
                <p>Sort by:</p>
                <button>Most recent</button>
                <button>Lowest price</button>
                <button>Highest price</button>
            </div>
        )
    }
}
export default Filters;