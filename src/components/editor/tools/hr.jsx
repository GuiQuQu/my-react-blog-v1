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
        let [lineContent, st, ed] = api.getAllLineContent(state);
        let modifyText = "\n---\n\n";
        if (ed + 1 < state.text.length && state.text[ed +1 ] === "\n")
            ed += 1;
        let cursurPosition = ed + modifyText.length;
        api.setSelectionRange(ed,ed);
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
    },
    codeKey: [],
}

export default Hr;