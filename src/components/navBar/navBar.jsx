import React, { Component } from 'react';

import bilibili_logo from './bilibili-logo.svg'
import github_logo from './github_logo.svg'

import './navBar.css'

class navBar extends Component {
    state = {}
    render() {
        return (
            <nav className='navbar navbar-expand-lg nav-self-container'>
                <div className="container-fluid">
                    <a className="navbar-brand nav-self-brand" href="/">归去去</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-list" id="navbarContent">
                        <ul className='navbar-nav me-auto mb-lg-0'>
                            {/* <li className="nav-item">
                                <a className="nav-link active nav-self-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-self-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-self-link" href="/">Blog</a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="image-field d-lg-block">
                        <a href="https://space.bilibili.com/35938821"><img src={bilibili_logo} alt="bilibi" /></a>
                        <a href="https://github.com/GuiQuQu"><img className='nav-image-right' src={github_logo} alt="github" /></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default navBar;