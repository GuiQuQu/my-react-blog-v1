/**
 * 操作TextArea的api
 * 1.替换选中的文本,并将光标移动到选中的文本之后
 * 2.当没有选中文本时,从当前光标位置添加内容,并把光标根据传入的下标位置移动到指定位置
 * 3.ctrl+z 撤销操作
 * **/
 class TextAreaApi {
    constructor(textArea) {
        this.textArea = textArea;
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
            selectedText: this.textArea.value ? this.textArea.value.slice(this.textArea.selectionStart, this.textArea.selectionEnd) : null,
        }
    }
    getCursurPosition() { // 获取光标位置
        let cursurPosition = -1;
        if (!this.isFocus()) return cursurPosition;
        if (this.textArea.selectionStart)
            cursurPosition = this.textArea.selectionStart
        return cursurPosition;
    }
    getSelectedRange() {  //获取选中范围
        if (!this.isFocus()) return [-1,-1];
        if (this.textArea.selectionStart && this.textArea.selectionEnd)
            return [this.textArea.selectionStart,this.textArea.selectionEnd]
        return [-1, -1];
    }

    replaceSelection(text, moved = 0) {
        const [st, ed] = this.getSelectedRange();
        if (st < 0 || ed < 0) return false;
        const oldText = this.textArea.value;
        let newText = oldText.substring(0,st) + text + oldText.substring(ed, oldText.length);
        this.textArea.value = newText;
        this.textArea.focus();
        if (moved !== 0) {
            //移动光标
        }
        return true;
    }
}

export {
    TextAreaApi
}