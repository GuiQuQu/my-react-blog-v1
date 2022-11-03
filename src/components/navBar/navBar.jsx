import React, { Component } from 'react';

import bilibili_logo from './bilibili-logo.svg'
import github_logo from './github_logo.svg'

import './navBar.css'

class navBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className='navbar navbar-expand-lg nav-container'>
                <div className="container-fluid">
                    <a className="navbar-brand nav-self-brand" href="/">归去去</a>
                    <div className="navbar-collapse nav-list" id="navbarContent">
                        <ul className='navbar-nav me-auto mb-lg-0'>
                            <li className="nav-item">
                                <a className="nav-link active nav-self-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-self-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-self-link" href="/">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="image-field">
                        <img src={bilibili_logo} alt="bilibi" />
                        <img className='nav-image-right' src={github_logo} alt="github" />
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default navBar;