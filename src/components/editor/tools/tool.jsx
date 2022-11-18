import React from 'react';

function Tool(props) {
    const svg = props.svg; //图标
    const title = props.title; // 名字
    const hint = props.hint; //提示语
    const handleClick = props.handleClick; // 点击操作事件
    const _class = props._class;
    // console.log(className);
    return ( <button className="border-none bg-white" data-bs-toggle="tooltip" data-bs-placement="top" title={`${hint}`}
        onClick={handleClick}
        >
        <img src={svg} alt={title} />
    </button>);
}
export default Tool;
