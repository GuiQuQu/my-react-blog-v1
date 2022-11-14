import hrLogo from "../toolbar-svg/two-line.svg"

/**
 * 寻找选中的文本的最后一行,在最后一行的后面追加\n---\n
 * **/

const Hr = {
    title: "hr",
    svg: hrLogo,
    hint: "分割线",
    excute: (api) => {
        const state = api.getTextAreaState();
        const [lineContent, st, ed] = api.getAllLineContent(state);
        let modifyText = "\n\n---\n";
        let cursurPosition = ed + modifyText.length + 1;
        if (ed === state.text.length) {
            //文末,没有\n
             modifyText = "\n\n---\n\n";
             cursurPosition = ed + modifyText.length;
        } 
        api.setSelectionRange(ed,ed);
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
    },
    codeKey: [],
}

export default Hr;