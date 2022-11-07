import React, { Component } from 'react';

import folder_open from "./fig-open.svg"
import folder_close from "./fig-close.svg"
import more_info from "./more.svg";
import File from "./File.jsx"


class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = { is_open: true, }
    }
    openFolder() {
        const openImg = document.querySelector(`#folder-node-${this.props.id} > div > .open-img`);
        const closeImg = document.querySelector(`#folder-node-${this.props.id} > div > .close-img`);
        openImg.style.display = "block";
        closeImg.style.display = "none";
        const childNode = document.getElementById(`folder-node-${this.props.id}`).children;
        for (let i = 1; i < childNode.length; ++i)
            childNode[i].style.display = "block";
    }
    
    closeFolder() {
        const openImg = document.querySelector(`#folder-node-${this.props.id} > div > .open-img`);
        const closeImg = document.querySelector(`#folder-node-${this.props.id} > div > .close-img`);
        openImg.style.display = "none";
        closeImg.style.display = "block";
        const childNode = document.getElementById(`folder-node-${this.props.id}`).children;
        for (let i = 1; i < childNode.length; ++i)
            childNode[i].style.display = "none";
    }

    handleClick = () => {
        if (this.state.is_open) 
            this.closeFolder();
        else 
            this.openFolder();
        this.setState({is_open: !this.state.is_open});
    }
    indent = () => {
        let withe_space = "";
        for (let i = 0; i < this.props.layer; ++i)
            withe_space += "&nbsp;&nbsp;&nbsp;&nbsp;";
        return withe_space;
    }
    handleMouseEnter = () => {
        const adBtn = document.querySelector(`#folder-node-${this.props.id} > div > .ad-btn`);
        adBtn.style.display = "block";
    }
    handleMouseLeave = () => {
        const adBtn = document.querySelector(`#folder-node-${this.props.id} > div > .ad-btn`);
        adBtn.style.display = "none";
    }
    render() { 
        return ( <div className='folder-node node' id={`folder-node-${this.props.id}`}>
        <div className='node-div' onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <span className="indent" dangerouslySetInnerHTML={{__html: this.indent()}} />
            <img className='open-img' src={folder_open} alt="folder-open"/>
            <img className='close-img' src={folder_close} alt="folder-close"/>
            <span>{this.props.value}</span>
            <button type="button" className="right-align ad-btn">
            <img src={more_info} alt="more info" />
            </button>
        </div>
        {this.props.treeChildren.map((nodeId) => {
            let node = this.props.data[nodeId];
            if (node.children)
                return <Folder data={this.props.data} key={node.id} id={node.id} value={node.value} layer={this.props.layer + 1} treeChildren={node.children}/>
            else
                return <File key={node.id} id={node.id} value={node.value} layer={this.props.layer + 1} href={node.href} />
        })}
    </div> );
    }

    componentDidMount() {
        //初始化
        // 是否展开
        if (this.state.is_open)
            this.openFolder();
        else
            this.closeFolder();
    }
}
 
export default Folder;