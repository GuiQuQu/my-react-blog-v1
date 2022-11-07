import React, { Component } from 'react';

import text_mark from "./text-mark.svg"
import more_info from "./more.svg";
/**
 * 叶节点属性 id value 
 * **/
class File extends Component {

    show() {
        const self = document.querySelector(`#file-node-${this.props.id}`);
        self.style.display = "block";
    }
    hide() {
        const self = document.querySelector(`#file-node-${this.props.id}`);
        self.style.display = "none";
    }
    indent = () => {
        let withe_space = "";
        for (let i = 0; i < this.props.layer; ++i)
            withe_space += "&nbsp;&nbsp;&nbsp;&nbsp;";
        return withe_space;
    }
    handleMouseEnter = () => {
        const adBtn = document.querySelector(`#file-node-${this.props.id} > div > .ad-btn`);
        adBtn.style.display = "block";
    }
    handleMouseLeave = () => {
        const adBtn = document.querySelector(`#file-node-${this.props.id} > div > .ad-btn`);
        adBtn.style.display = "none";
    }
    render() { 
        return (
        <div className="file-node node" id={`file-node-${this.props.id}`}>
            <div className='node-div' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <span className="indent" dangerouslySetInnerHTML={{__html: this.indent()}} />
                <img src={text_mark} alt="file"/>
                <a href={this.props.href}>{this.props.value}</a>
                <button type="button" className="right-align ad-btn">
                    <img src={more_info} alt="more info" />
                </button>
            </div>
        </div>
        );
    }
}
 
export default File;