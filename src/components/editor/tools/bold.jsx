import boldLogo from "../toolbar-svg/bold.svg";

const Bold = {
    title: "bold",
    svg: boldLogo,
    hint: "加粗 Ctrl+B",
    excute: (api) => {
        const state = api.getTextAreaState();
        let modifyText = `****`;
        let cursurPosition = state.selection.start + 2;
        if (state.selectedText) {
            if (state.selectedText.startsWith("**") && state.selectedText.endsWith("**")) {
                if (state.selectedText.length < 4) {
                    modifyText = state.selectedText;
                    cursurPosition = state.selectedText.end;
                } else {
                    modifyText = state.selectedText.substring(2, state.selectedText.length - 2);
                    cursurPosition = state.selection.end - 4;
                }
            }
            else {
                modifyText = `**${state.selectedText}**`;
                cursurPosition = state.selection.end + 4;
            }
        }
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
    },
    codeKey: ["control", "b"]
}

export default Bold;