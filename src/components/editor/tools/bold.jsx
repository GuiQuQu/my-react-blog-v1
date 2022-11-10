import React from 'react';

import Tool from "./tool";
import blod from "../toolbar-svg/bold.svg";
function Bold(props) {
    const api = props.api; // 修改函数
    const handleClick = () => {
        api();
    }
    const handleOnKeyDown = (e) => {
        let keyCode = e.keyCode || e.which ||  e.charCode;
        let ctrlCode = e.ctrlKey || e.mataKey;
        if (ctrlCode && keyCode === 66) {
            api();
        }
        e.preventDefault();
    }
    return ( <Tool 
    svg={blod}
    title="加粗"
    hint="加粗 Ctrl+B"
    handleClick={handleClick}
    handleOnKeyDown={handleOnKeyDown}
    /> );
}

export default Bold;