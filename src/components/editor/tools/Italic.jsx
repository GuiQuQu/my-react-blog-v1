import italicLogo from "../toolbar-svg/italic.svg"
const Italic = {
    title: "italic",
    svg: italicLogo,
    hint: "斜体 Ctrl+I",
    excute: (api) => {
        const state = api.getTextAreaState();
        let modifyText = `**`;
        let cursurPosition = state.selection.start + 1;
        if (state.selectedText) {
            if (state.selectedText.startsWith("*") && state.selectedText.endsWith("*")) {
                if (state.selectedText.length < 2) {
                    modifyText = state.selectedText;
                    cursurPosition = state.selectedText.end;
                } else {
                    modifyText = state.selectedText.substring(1, state.selectedText.length - 1);
                    cursurPosition = state.selection.end - 2;
                }
            }
            else {
                modifyText = `*${state.selectedText}*`;
                cursurPosition = state.selection.end + 2;
            }
        }
        api.replaceSelection(modifyText, cursurPosition);  
    },
    codeKey: ["control","i"]
}

export default Italic;