import React, { Component } from 'react';

import { connect } from 'react-redux';

import { deleteFromCart, increaseQuantity, reduceQuantity } from '../actions/CartActions'

class Billing extends Component {

    deleteFromCart = (id) => {
        this.props.deleteFromCart(id)
    }

    increaseQuantity = id => {
        this.props.increaseQuantity(id)
    }

    reduceQuantity = id => {
        this.props.reduceQuantity(id)
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Sl.No</th>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.cartItems && this.props.cartItems.map((item, id) => 
                            <tr key={ item.category } style={{ backgroundColor : item.category.indexOf('V')=== 0 && '#addfad' || item.category.indexOf('NV')=== 0 && '#ffcccb' || item.category.indexOf('D')=== 0 && '#f7f663' }}>
                                <td>{ id + 1}</td>
                                <td>{item.name}</td>
                                
                                <td>
                                    <span className={`btn me-2 ms-2 btn-outline-${item.category.indexOf('V') === 0 && 'success' || item.category.indexOf('NV') === 0 && 'danger' || item.category.indexOf('D') === 0 && 'warning'}`}
                                        onClick={() => this.increaseQuantity(id)}
                                    > + </span>
                                    {item.count}
                                    <span className={`btn me-2 ms-2 btn-outline-${item.category.indexOf('V') === 0 && 'success' || item.category.indexOf('NV') === 0 && 'danger' || item.category.indexOf('D') === 0 && 'warning'}`}
                                        onClick={() => item.count > 1 ? this.reduceQuantity(id) : this.deleteFromCart(id)}
                                    > - </span>
                                </td>

                                <td> &#8377;{ item.count * item.price }.00 </td>
                            </tr>
                        ) }
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartList,
    }
}


export default connect(mapStateToProps, { deleteFromCart, increaseQuantity, reduceQuantity })(Billing);