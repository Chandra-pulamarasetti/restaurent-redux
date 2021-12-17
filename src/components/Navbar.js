import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className='nav-container'>
                <div className='nav'>
                    <div className='logo'>Logo</div>
                    <div className='links'>
                        <div className='signup'>SignUp</div>
                        <div className='login'>Login</div>
                    </div>
                </div>
            </div>
        )
    }
}
