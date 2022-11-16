import Bold from "./bold";
import Italic from "./Italic";
import { Title,Title1,Title2,Title3,Title4,Title5,Title6 } from "./title";
import Division from "./division";
import { OrderedList, UnorderedList,OlEnter,UlEnter,NormalEnter } from "./list";
import Hr from "./hr";
import Code from "./code";
import Latex from "./latex";
import Picture from "./picture";
import Link from "./link";
//需要显示图标的工具
const defaultToolBars = [Title,Bold,Italic,Division,OrderedList,UnorderedList,Hr,Division,Code,Latex,Division,Picture,Link];
//只绑定快捷键的工具
const KeyCodeToolBars = [Title1,Title2,Title3,Title4,Title5,Title6,UlEnter,OlEnter,NormalEnter];


export default defaultToolBars;
export {
    KeyCodeToolBars
}