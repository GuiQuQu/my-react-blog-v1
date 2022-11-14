import linkLogo from "../toolbar-svg/link.svg";

/**
 * 替换内容[${选中内容}](检查剪切板,如果like url就复制过来)
 * **/

const Link = {
    title: "link",
    svg: linkLogo,
    hint: "链接 Ctrl+K",
    excute: (api) => {
        const state = api.getTextAreaState();
        const urlRe = /^(https:\/\/|http:\/\/).*/g;
        navigator.clipboard.readText().then(
            clipText => {
                let modifyText = "";
                if (clipText.match(urlRe)) 
                    modifyText = `[${state.selectedText}](${clipText})`;
                else
                    modifyText = `[${state.selectedText}]()`;
                api.replaceSelection(modifyText);
                api.setSelectionRange(state.selection.start + 1,state.selection.end + 1);
            });
    },
    codeKey: ["control", "k"],
}

export default Link;