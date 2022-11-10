import React from 'react';

import Bold from "./bold";




function Tool(props) {
    const svg = props.svg; //图标
    const title = props.title; // 名字
    const hint = props.hint; //提示语
    const handleClick = props.handleClick; // 点击操作事件
    const handleOnKeyDown = props.handleOnKeyDown; // 监听快捷键
    return ( <button data-bs-toggle="tooltip" data-bs-placement="top" title={`${hint}`}
        onClick={handleClick}
        onKeyDown={handleOnKeyDown}
        >
        <img src={svg} alt={title} />
    </button>);
}
export default Tool;
export {
    Bold
}