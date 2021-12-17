import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getVegItem, getNonVegItem, getDesertItem, removeVegItem, removeNonVegItem, removeDesertItem  } from '../actions/MenuActions'

class MenuList extends Component {

    getVegItem = () => {
        this.props.getVegItem()
        this.props.removeNonVegItem()
        this.props.removeDesertItem()
    }

    getNonVegItem = () => {
        this.props.getNonVegItem()
        this.props.removeVegItem()
        this.props.removeDesertItem()
    }

    getDesertItem = () => {
        this.props.getDesertItem()
        this.props.removeNonVegItem()
        this.props.removeVegItem()
    }

    render() {
        return (
            <div className='menu-list'>
                <div className='menulist-item veg' onClick={this.getVegItem}>Veg </div>
                <div className='menulist-item nonveg' onClick={this.getNonVegItem}>Non-Veg</div>
                <div className='menu-list desserts' onClick={this.getDesertItem}>Desserts </div>
            </div>
        )
    }
}



export default connect(null, { getVegItem, getNonVegItem, getDesertItem, removeDesertItem, removeNonVegItem, removeVegItem })(MenuList)
