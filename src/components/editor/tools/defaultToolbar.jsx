import Bold from "./bold";
import Italic from "./Italic";
import { Title,Title1,Title2,Title3,Title4,Title5,Title6 } from "./title";
import Division from "./division";
//需要显示图标的工具
const defaultToolBars = [Title,Bold,Italic,Division];
//只绑定快捷键的工具
const KeyCodeToolBars = [Title1,Title2,Title3,Title4,Title5,Title6]


export default defaultToolBars;
export {
    KeyCodeToolBars
}