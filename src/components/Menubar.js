import React, { Component } from 'react'

export default class Menubar extends Component {
    render() {
        return (
            <div className='menu-container'>
                <div className='menu-item menu'>Menu</div>
                <div className='menu-item items'>Items</div>
                <div className='menu-item cart'>Cart</div>
            </div>
        )
    }
}
