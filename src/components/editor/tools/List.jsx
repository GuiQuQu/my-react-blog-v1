import {olLogo} from "../toolbar-svg/list-ol.svg";
import {ulLogo} from "../toolbar-svg/list-ul.svg";
/**
 * 针对光标所在的全部行,给每一行都添加 - 或者是序号1. 2. ...
 * 修改enter键入,检测当前选中行,如果这行是 - 或者 [数字]. 开头,则键入 \n- 或者 \n[数字]. 
 * **/
const orderedList = {
    title: "ol",
    svg: olLogo,
    excute:(api) => {
        let state = api.getselectionAllLine();
    },

}