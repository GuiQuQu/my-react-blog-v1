import React from 'react';
import { useEffect } from 'react';

import md2html from "../../utils/md2html";
import * as ToolBar from "./tools/tool.jsx";

import './MDEditor.css';

function MDEditor (props) {
    const [value, setValue] = React.useState(() => props.value? props.value : "");

    // 当value的值修改之后会被触发
    useEffect(()=> {
        const previewDiv = document.querySelector("#md-editor-preview-area");
        previewDiv.innerHTML = md2html(value, () => false);
    },[value]);

    const handleChange = () => { // 监听文本框内容变化,即时渲染预览内容
        const writeContent = document.querySelector("#md-editor-write-area").value;
        setValue(writeContent);
    }
    const handleKeyDown = (e) => { // 阻止tab的默认行为
        const writeArea = document.querySelector("#md-editor-write-area");
        if (e.keyCode === 9) {
            writeArea.value += "\t";
            setValue( value + "\t");
            e.preventDefault();
        }
    }
    const handleKeyUp = (e) => {
        if (e.keyCode === 192) { // 阻止`的默认行为
            e.preventDefault();
        }
    }

    return (<div className='md-editor-container'>
            <div className='md-editor-toolbar'>
            <ToolBar.Bold textAreaId="md-editor-write-area"/>
            </div>
            <div className="md-editor-content">
                    <textarea name="write-area" id="md-editor-write-area" 
                            value={value}  
                            onChange={handleChange}  
                            onKeyUp={handleKeyUp}
                            onKeyDown={handleKeyDown}
                            className="md-editor-write-area">
                    </textarea>
                <div id="md-editor-preview-area" className='markdown-body md-editor-preview-area'></div>
            </div>

    </div>)
};

export default MDEditor;