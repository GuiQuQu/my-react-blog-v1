import React from 'react';

import Tool from "./tool";
import ltalic from "../toolbar-svg/ltalic.svg";
function Italic(props) {

    return ( <Tool 
        svg={ltalic}
        title={"斜体"}
        hint="斜体 Ctrl+I"
    /> );
}

export default Italic;