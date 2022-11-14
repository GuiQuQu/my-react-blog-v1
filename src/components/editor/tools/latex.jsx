import latexLogo from "../toolbar-svg/formula.svg";

/**
 * 添加内容 $$\n${state.selectedText}\n$$
 * 
*/

const Latex = {
      title: "latex",
      svg: latexLogo,
      hint: "代码 Ctrl+Shift+M",
      excute: (api) => {
        const state = api.getTextAreaState();
        const modifyText = `\n$$\n${state.selectedText}\n$$\n`;
        const cursurPosition = state.selection.start + 4;
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
      },
      codeKey: ["control","shift","M"]
}

export default Latex;