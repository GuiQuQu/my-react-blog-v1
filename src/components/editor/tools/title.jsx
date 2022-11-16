import titleLogo from "../toolbar-svg/h.svg";
// title,选择让标题从1号逐渐变小的实现方式,然后在写6个title,对应6个快捷键,不展示图标,只绑定快捷键
const allTitles = [
    "",
    "# ",
    "## ",
    "### ",
    "#### ",
    "##### ",
    "###### ",
];

const Title = {
    title:"title",
    svg: titleLogo,
    hint: "标题 Ctrl+数字",
    excute: (api) => {
        //无论有没有选中文本,都需要选中光标所在的那一行进行处理
        let state = api.getSelectionAllLine();
        let modifyText = `${state.selectedText}`;
        let cursurPosition = state.selection.end;
        for (let i = allTitles.length - 1; i >= 0; --i) {
            if (state.selectedText.startsWith(allTitles[i])) { //以某个标题开头
                const nextTitle = allTitles[(i + 1) % allTitles.length];
                const mainContent = state.selectedText.substring(allTitles[i].length, state.selectedText.length);
                modifyText = `${nextTitle}${mainContent}`;
                cursurPosition = state.selection.start + modifyText.length;
                break;
            }
        }
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
    },
    codeKey: []
};

function getTitleStart(Str) {
    for (let i = allTitles.length - 1; i >= 0; --i) {
        if (Str.startsWith(allTitles[i]))
            return i;
    }
    return 0;
};


const [Title1, Title2, Title3,Title4, Title5, Title6] = allTitles.slice(1,7).map((title_text,sidx) => {
    return {
    title: `${sidx + 1}`,
    excute:(api) => {
        //选择行文本
        const TargetTitleIdx = sidx + 1;
        let state = api.getSelectionAllLine();
        // 检查是否存在其他标题开头
        const CurrentTitleIdx = getTitleStart(state.selectedText);
        let modifyText = allTitles[TargetTitleIdx];
        let cursurPosition = state.selection.end;
        const mainContent = state.selectedText.substring(allTitles[CurrentTitleIdx].length, state.selectedText.length);
        if (CurrentTitleIdx === TargetTitleIdx) // 去掉目标标题
        {
            modifyText = `${mainContent}`;
            cursurPosition = state.selection.start + modifyText.length;
        }
        else //换成目标标题
        {
            modifyText = `${allTitles[TargetTitleIdx]}${mainContent}`;
            cursurPosition = state.selection.start + modifyText.length;
        }
        api.replaceSelection(modifyText);
        api.setSelectionRange(cursurPosition,cursurPosition);
    },
    codeKey: ["control",`${sidx + 1}`]}
});

export {
    Title,
    Title1,
    Title2,
    Title3,
    Title4,
    Title5,
    Title6,
}