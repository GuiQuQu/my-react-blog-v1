/**
 * 操作TextArea的api
 * 1.替换选中的文本,并将光标移动到选中的文本之后
 * 2.当没有选中文本时,从当前光标位置添加内容,并把光标根据传入的下标位置移动到指定位置
 * 3.ctrl+z 撤销操作
 * **/
 class TextAreaApi {
    constructor(textArea, setValue = null) {
        this.textArea = textArea;
        this.setValue = setValue;
    }

    isFocus() {
        return this.textArea === document.activeElement;
    }

    getTextAreaState() {
        return {
            selection: {
                start: this.textArea.selectionStart,
                end: this.textArea.selectionEnd,
            },
            text: this.textArea.value,
            selectedText:this.textArea.value.slice(this.textArea.selectionStart, this.textArea.selectionEnd),
        }
    }

    getselectionAllLine() {
        let state = this.getTextAreaState();
        const lines = state.text.split("\n");
        let st = 0, ed = 0; //前开后闭
        let passLength = 0;
        // 寻找开始行
        let i = 0;
        for (i = 0; i < lines.length; ++i) { // 注意\n占一个字符
            if (passLength <= state.selection.start && state.selection.start <= passLength + lines[i].length) {
                st = passLength;
                break;
            }
            passLength += lines[i].length + 1;
        }
        //寻找结束行,从st行开始
        for (; i < lines.length; ++i) {
            if (passLength <= state.selection.end && state.selection.end <= passLength + lines[i].length) {
                ed = passLength + lines[i].length;
                break;
            }
            passLength += lines[i].length + 1;
        }
        // 更新选中的文本
        state.selection.start = st;
        state.selection.end = ed;
        state.selectedText = state.text.substring(st,ed);
        this.setSelectionRange(st,ed);
        return state;
    }

    getselectionStartLine() {
        let state = this.getTextAreaState();
        //选中光标选中的第一行
        const lines = state.text.split("\n"); 
        let passLength = 0;
        for (let i = 0; i < lines.length; ++i) { // 注意\n占一个字符
            if (passLength <= state.selection.start && state.selection.start < passLength + lines[i].length + 1) 
            {
                state.selection.start = passLength;
                state.selection.end = passLength + lines[i].length;
                state.selectedText = state.text.substring(passLength, passLength + lines[i].length);
                break;
            }
            passLength += lines[i].length + 1;
        }
        this.setSelectionRange(state.selection.start,state.selection.end);
        return state;
    };

    getCursurPosition() { // 获取光标位置
        let cursurPosition = -1;
        if (this.textArea.selectionStart)
            cursurPosition = this.textArea.selectionStart
        return cursurPosition;
    }

    getSelectedRange() {  //获取选中范围
        if (this.textArea.selectionStart >= 0 && this.textArea.selectionEnd >= 0)
            return [this.textArea.selectionStart,this.textArea.selectionEnd]
        return [-1, -1];
    }

    setSelectionRange(st,ed) {
        if (st >= 0 && st < this.textArea.value.length && 
            ed >= 0 && st < this.textArea.value.length && 
            st <= ed)
        this.textArea.setSelectionRange(st,ed);
    }

    replaceSelection(text, cursurPosition = -1) {
        const [st, ed] = this.getSelectedRange();
        if (st < 0 || ed < 0) return false;
        const oldText = this.textArea.value;
        let newText = oldText.substring(0,st) + text + oldText.substring(ed, oldText.length);
        this.textArea.value = newText;
        if (cursurPosition < 0) {
            this.textArea.setSelectionRange(ed,ed);
        }else {
            this.textArea.setSelectionRange(cursurPosition,cursurPosition);
        }
        if (this.setValue)
            this.setValue(newText);
        this.textArea.focus();
        return true;
    }
}

export {
    TextAreaApi
}