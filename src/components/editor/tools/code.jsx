import codeLogo from "../toolbar-svg/code.svg";

/**
 * 添加内容 ```\n${state.selectedText}\n```
 * 
*/

const Code = {
      title: "code",
      svg: codeLogo,
      hint: "代码 Ctrl+Shift+K",
      excute: (api) => {
        const state = api.getTextAreaState();
        const modifyText = `\n\`\`\`\n${state.selectedText}\n\`\`\`\n`;
        const cursurPosition = state.selection.start + 4;
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
      },
      codeKey: ["control","shift","k"]
}

export default Code;