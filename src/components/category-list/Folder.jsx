import React, { Component } from 'react';

import folder_open from "./fig-open.svg"
import folder_close from "./fig-close.svg"
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

    render() { 
        return ( <div className="" id={`folder-node-${this.props.id}`}>
        <div className="flex gap-1 items-st hover-pointer pd-b-2" onClick={this.handleClick}>
            {<span style={{
                paddingRight: `calc(${this.props.layer} * 1rem)`
            }}></span>}
            <img className='open-img pd-t-1' src={folder_open} alt="folder-open"/>
            <img className='close-img pd-t-1' src={folder_close} alt="folder-close"/>
            <span className='txt-wrap fs-16px bold'>{this.props.value}</span>

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