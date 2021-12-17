import React, { Component } from 'react'
import Billing from './Billing'
import ItemsList from './ItemsList'
import MenuList from './MenuList';


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
                    <Billing />
                </div>
            </div>
        )
    }
}


export default Layout
