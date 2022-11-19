import React, { Component } from 'react';

import text_mark from "./text-mark.svg"
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

    render() { 
        return (
        <div className="" id={`file-node-${this.props.id}`}>
            <div className="flex gap-1 items-st hover-pointer pd-b-2">
                {<span style={{
                    paddingRight: `calc(${this.props.layer} * 16px)`
                }}></span>}
                <img className='pd-t-0.5' src={text_mark} alt="file"/>
                <a className='text-decoration-none color-gray-40 fs-14px' href={this.props.href}>{this.props.value}</a>
            </div>
        </div>
        );
    }
}
 
export default File;