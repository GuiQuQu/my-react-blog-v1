import React, { Component } from 'react';

import folder_open from "./triangle-fill-open.svg"
import folder_close from "./triangle-fill-close.svg"

import File from "./File.jsx"

class Folder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            is_open: false,        
        }
    }
    openFolder() {
        let openImg = document.querySelector(`folder-node-${this.props.id} > .open-img`);
        let closeImg = document.querySelector(`folder-node-${this.props.id} > .close-img`)
        openImg.style.display = "block";
        closeImg.style.display = "none";
    }
    
    closeFolder() {

    }

    handleClick() {
        if (this.is_open) 
            this.closeFolder()
        else 
            this.openFolder()
        this.setState({is_open: !this.is_open})
    }
    
    render() { 
        return ( <div className='folder-node' id={`folder-node-${this.props.id}`}>
        <img className='open-img' src={folder_open} onClick={this.handleClick} alt="folder-open"/>
        <img className='close-img' src={folder_close} onClick={this.handleClick} alt="folder-close"/>
        <span>{props.value}</span>
        {props.treeChildren.map((node) => {
            if (node.children)
                return <Folder key={node.id} id={node.id} value={node.value} treeChildren={node.treeChildren}/>
            else
                return <File key={node.id} id={node.id} value={node.value} href={node.href} />
        })}
    </div> );
    }

    componentDidMount() {
        //初始化
        if (this.is_open)
            this.openFolder()
        else
            this.closeFolder()
    }
}
 
export default Folder;