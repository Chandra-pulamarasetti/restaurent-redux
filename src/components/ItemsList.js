import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../actions/CartActions'

class ItemsList extends Component {

    addToCart = (item) => {
        this.props.addToCart(item)
    }

    render() {
        return (
            <div className='item-container'>
                <div>
                    {(this.props.veg) && this.props.veg.map(item => <h3
                        key={item.category}
                        className='btn btn-outline-dark m-2 item-veg'
                        onClick={() => this.addToCart(item)}
                    >{item.name}</h3>)}
                </div>
                
                <div>                    
                    {this.props.nonVeg && this.props.nonVeg.map(item => <h3
                        key={item.category}
                        className='btn btn-outline-dark m-2 item-nonveg'
                        onClick={() => this.addToCart(item)}
                    >{item.name}</h3>)}
                </div>

                <div>
                    {this.props.dessert && this.props.dessert.map(item => <h3
                        key={item.category}
                        className='btn btn-outline-dark m-2 item-dessert'
                        onClick={() => this.addToCart(item)}
                    >{item.name}</h3>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        veg: state.menu.vegItems,
        nonVeg: state.menu.nonVegItems,
        dessert : state.menu.dessertItems
    }
}

export default connect(mapStateToProps, { addToCart })(ItemsList)
