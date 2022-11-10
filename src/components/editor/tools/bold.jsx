import React from 'react';

import Tool from "./tool";
import blod from "../toolbar-svg/bold.svg";
import {TextAreaApi} from "./utils";

function Bold(props) {
    const textArea = document.getElementById(props.textAreaId);
    const taApi = new TextAreaApi(textArea);

    const excute = (state,api) => {
            let modifyText = `****`;
            if (state.selectedText) {
                modifyText = `**${state.selectedText}**`;
            }
            let moved = 2;
            if (state.selectedText) moved = 0;
            api.replaceSelection(modifyText,moved);
    }

    const excuteWarpper = () => {

    }

    const handleClick = () => {
        console.log("click");
        const state = taApi.getTextAreaState();
        excute(state,taApi);
    }
    const handleOnKeyDown = (e) => {
        let keyCode = e.keyCode || e.which ||  e.charCode;
        let ctrlCode = e.ctrlKey || e.mataKey;
        if (ctrlCode && keyCode === 66) {
            const state = taApi.getTextAreaState();
            excute(state,taApi);
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