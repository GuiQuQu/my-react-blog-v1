import React, {useMemo, useCallback} from 'react';
import { useEffect } from 'react';

import md2html from "../../utils/md2html";
import { TextAreaApi } from "./tools/utils";
import Tool from "./tools/tool";


function MDEditor (props) {
    const [value, setValue] = React.useState(() => props.value? props.value : "");

    // 当value的值修改之后会被触发
    const renderValue = useMemo(() => value, [value]);
    
    useEffect(()=> {
        const previewDiv = document.querySelector("#md-editor-preview-area");
        previewDiv.innerHTML = md2html(renderValue, () => false);
    },[renderValue]);
    
    const handleInput = () => { // 监听文本框内容变化,即时渲染预览内容
        const ta = document.querySelector("#md-editor-write-area");
        const writeContent = ta.value;
        setValue(writeContent);
    }
    const handleAutoHeight = () => {
        const ta = document.querySelector("#md-editor-write-area");
        ta.style.height = "auto";
        ta.scrollTop = 0;
        ta.style.height = ta.scrollHeight + 'px';
    }
    const bindCodeKey =useCallback((ta, tool) => {
            const codeKey = tool["codeKey"];
            if (!codeKey || codeKey.length <= 0)
                return
            // ["9"] or ["control", "b"]
            const handleKeyDown = (e) => {
                //检查快捷键条件
                let check = true;
                const codeKeys = tool["codeKey"];
                for (let idx in codeKeys) {
                    const TargetCode = codeKeys[idx];
                    if (TargetCode.toLowerCase() === "control") {
                        check = check && e.ctrlKey;
                    }
                    else if (TargetCode.toLowerCase() === "alt") {
                        check = check && e.altKey;
                    }
                    else if (TargetCode.toLowerCase() === "shift") {
                        check = check && e.shiftKey;
                    }
                    else {
                        check = check && (TargetCode.toLowerCase() === e.key.toLowerCase())
                    }
                }
                if (check) {
                    const writeArea = document.querySelector("#md-editor-write-area");
                    const taApi = new TextAreaApi(writeArea,setValue);
                    const excute = tool["excute"];
                    excute(taApi);
                    e.preventDefault();
                }
            }
            ta.addEventListener("keydown",handleKeyDown);
    },[]);

    const handleTab = (e) => {
        if (e.key.toLowerCase() === "tab") {
            const writeArea = document.querySelector("#md-editor-write-area");
            const api = new TextAreaApi(writeArea,setValue);
            const state = api.getTextAreaState();
            let modifyText = "\t";
            let cursurPosition = state.selection.start + 1;
            api.replaceSelection(modifyText, cursurPosition);
            e.preventDefault();
        }
    }

    const handlePaste = (e) => {
         // Chrome支持获取剪切板图像内容
        const clipboardData = e.clipboardData;
        if (!clipboardData) return;
        if (!clipboardData.items) return;
        let item = clipboardData.items[0];
        const types = clipboardData.types || [];
        console.log(types);
        for (let i = 0; i < types.length; i++) {
            if (types[i] === "Files")
                item = clipboardData.items[i];
        }
        // 检查是否图片
        console.log(item);
        if (item && item.kind === "file" && item.type.match(/^image\//)) {
            const writeArea = document.querySelector("#md-editor-write-area");
            const api = new TextAreaApi(writeArea,setValue);
            const state = api.getTextAreaState();
            const imgSrc = window.URL.createObjectURL(item.getAsFile());
            const modifyText = `![](${imgSrc})\n`;
            const cursurPosition = state.selection.end + modifyText.length;
            api.replaceSelection(modifyText);
            api.setSelectionRange(cursurPosition,cursurPosition);
            e.preventDefault();
        }
    };
    useEffect(() => {
        //给textarea绑定事件
        const ta = document.querySelector("#md-editor-write-area");
        // tab
        ta.addEventListener("keydown",handleTab);
        // 工具栏快捷键
        props.toolbars.forEach((tool) => {bindCodeKey(ta,tool)});
        props.keyCodeToolbars.forEach((tool) => {bindCodeKey(ta,tool)});
        
        ta.addEventListener("paste",handlePaste);
        ta.addEventListener("input",handleAutoHeight);
    },[]);

    return (<React.Fragment>
            <div className='editor-toolbar flex grow-0 items-center flex-1 gap-1 pd-1 pd-l-2 border-b-1px-gray'>
                {props.toolbars.map((tool,idx) => {
                     if (tool.title.toLowerCase() !== "division") {
                        return <Tool key={idx} svg={tool.svg} title={tool.title} hint={tool.hint} _class={tool._class}
                        handleClick={() => {
                            const writeArea = document.querySelector("#md-editor-write-area");
                            const api = new TextAreaApi(writeArea,setValue);
                            tool.excute(api);
                        }}/>;
                     } else {
                        return <span key={idx} className="toolbars-division">|</span>
                     }
                })}
            </div>
            <div className="editor-main flex grow-1 ">
                    <textarea name="write-area" id="md-editor-write-area"
                            className="border-none pd-2 grow w-full outline-none overflow-auto thin-gray-scroll resize-none"
                            value={value}
                            onInput={handleInput}
                            style={{cursor: "auto"}}></textarea>
                    <div className="w-full max-w-3px bg-light-gray"></div>
                <div id="md-editor-preview-area" className='markdown-body grow w-full pd-t-2 pd-3 overflow-auto thin-gray-scroll d-none d-lg-block'></div>
            </div>

    </React.Fragment>)
};

export default MDEditor;