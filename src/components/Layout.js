import React, { Component } from 'react'
import Billing from './Billing'
import ItemsList from './ItemsList'
import MenuList from './MenuList';

import { connect } from 'react-redux';

class Layout extends Component {


    render() {
        return (
             <div className='layout-container'>
                <div className='layout-item menu'>
                    <MenuList />
                </div>
                <div className='layout-item items'>
                    <ItemsList />
                </div>
                <div className='layout-item cart'>
                    {this.props.cartItems.length > 0 ? <Billing /> :
                        <div>
                            <h1 className='empty'>Cart is Empty</h1>
                            <h1 className='quick'>Add quickly</h1>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartList,
    }
}

export default connect(mapStateToProps, null)(Layout);
