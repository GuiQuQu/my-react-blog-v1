import olLogo from "../toolbar-svg/list-ol.svg";
import ulLogo from "../toolbar-svg/list-ul.svg";
/**
 * 针对光标所在的全部行,给每一行都添加 - 或者是序号1. 2. ...
 * 修改enter键入,检测当前选中行,如果这行是 - 或者 [数字]. 开头,则键入 \n- 或者 \n[数字]. 
 * **/
const UnorderedList = {
    title: "ul",
    svg: ulLogo,
    hint: "无序列表",
    excute:(api) => {
        let state = api.getSelectionAllLine();
        const oldText = state.selectedText;
        // 按行加入ul
        let modifyText = "";
        let ed = state.selection.end;
        const selectedLines = oldText.split("\n");
        for (let i = 0; i < selectedLines.length; ++i) {
            modifyText += `- ${selectedLines[i]}\n`;
            ed += 2;
        }
        modifyText = modifyText.substring(0,modifyText.length - 1); // 去掉最后一个\n
        api.replaceSelection(modifyText);
        api.setSelectionRange(ed,ed);
    },
    codeKey: []
};

const OrderedList = {
    title: "ol",
    svg: olLogo,
    hint: "有序列表",
    excute:(api) => {
        let state = api.getSelectionAllLine();
        const oldText = state.selectedText;
        // 按行加入ul
        let modifyText = "";
        let ed = state.selection.end;
        const selectedLines = oldText.split("\n");
        for (let i = 0; i < selectedLines.length ; ++i) {
            modifyText += `${(i+1).toString()}. ${selectedLines[i]}\n`;
            ed += `${(i+1).toString()}. `.length;
        }
        modifyText = modifyText.substring(0,modifyText.length - 1); // 去掉最后一个\n
        api.replaceSelection(modifyText);
        api.setSelectionRange(ed,ed);
    },
    codeKey: []
}

/**
 * - Hello World
 * - abc
 * 
 * 当光标位于行尾时,触发自动补全,其余情况均是正常情况
 * **/

function CheckListCondition(state,lineContent) 
{
    const st = state.selection.start;
    const ed = state.selection.end;
    const reMatch = lineContent.match(/^[0-9]+\. /g);
    const lineEnd = ed === state.text.length || state.text.substring(ed,ed + 1) === "\n";
    if (st === ed && lineEnd && lineContent.startsWith("- "))
        return ["ul","- "];
    else if (st === ed && lineEnd && reMatch) {
        const last = reMatch[0].substring(0, reMatch[0].length - 2);
        const cur = (parseInt(last) + 1).toString();
        return ["ol",`${cur}. `];
    }
    else 
     return ["other",""];

}   

const EnterAutoList = {
    title : "auto list by enter",
    excute: (api) => {
        let state = api.getTextAreaState();
        const [lineContent] = api.getAllLineContent(state);
        const [res,modify] = CheckListCondition(state,lineContent);
        let modifyText = `\n${modify}`;
        let cursurPosition = state.selection.end + modifyText.length;
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
        // 保证行可见,新开一行如果不在可视范围内需要滚动滚动条
        let stateAfter = api.getTextAreaState();
        if ( stateAfter.selection.end >= stateAfter.text.length ) {
            api.scrollToBottom();
        }
    },
    codeKey: ["enter"]
}

const NormalEnter = {
    title: "normalEnter",
    excute: (api) => {
        let state = api.getTextAreaState();
        const [lineContent] = api.getAllLineContent(state);
        const [res,modify] = CheckListCondition(state,lineContent);
        if(res === "other") {
            console.log("other")
            let modifyText = `\n${modify}`;
            let cursurPosition = state.selection.end + modifyText.length;
            api.replaceSelection(modifyText);
            api.setSelectionRange(cursurPosition,cursurPosition);
        }
    },
    keepDefault:true,
    codeKey: ["enter"]
}

const UlEnter = {
    title: "ulEnter",
    excute: (api) => {
        let state = api.getTextAreaState();
        const [lineContent] = api.getAllLineContent(state);
        const [res,modify] = CheckListCondition(state,lineContent);
        if(res === "ul") {
            console.log("ul");
            let modifyText = `\n${modify}`;
            let cursurPosition = state.selection.end + modifyText.length;
            api.replaceSelection(modifyText);
            api.setSelectionRange(cursurPosition,cursurPosition);
            return true;
        }
        return false;
    },
    keepDefault:true,
    codeKey: ["enter"]
}

const OlEnter = {
    title:"olEnter",
    excute:(api) => {
        let state = api.getTextAreaState();
        const [lineContent] = api.getAllLineContent(state);
        const [res,modify] = CheckListCondition(state,lineContent)
        if(res === "ol") {
            let modifyText = `\n${modify}`;
            let cursurPosition = state.selection.end + modifyText.length;
            api.replaceSelection(modifyText);
            api.setSelectionRange(cursurPosition,cursurPosition);
            return true;
        }
        return false;
    },
    keepDefault:true,
    codeKey: ["enter"]
}

export {
    UnorderedList, 
    OrderedList,
    UlEnter,
    OlEnter,
    NormalEnter,
    EnterAutoList,
}