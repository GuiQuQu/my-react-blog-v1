import React, { Component } from 'react';

import text_mark from "./text-mark.svg"
/**
 * 叶节点属性 id value 
 * **/
class File extends Component {
    constructor(props) {
        super(props)
    }
    show() {
        const self = document.querySelector(`#file-node-${this.props.id}`);
        self.style.display = "block";
    }
    hide() {
        const self = document.querySelector(`#file-node-${this.props.id}`);
        self.style.display = "none";
    }
    render() { 
        return (
        <div className="file-node" id={`file-node-${this.props.id}`}>
            <img src={text_mark} alt="file"/>
            <a href={props.href}>{props.value}</a> 
        </div>
        );
    }
}
 
export default File;