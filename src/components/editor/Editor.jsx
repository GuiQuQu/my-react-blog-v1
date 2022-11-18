import React from "react";
import { useState } from "react";
import MDEditor from "./MDEditor.jsx"
import defaultToolBars, { KeyCodeToolBars } from "./tools/defaultToolbar";

function Editor(props) {
  // value 是传入Editor的md内容
  const [value] = useState(() => { return props.value ? props.value : "" });
  const [title, setTitle] = useState(() => { return props.title ? props.title : "" });
  const handleTitleChange = (e) => {
    const TitleElement = document.querySelector("#md-editor-title");
    setTitle(TitleElement.value);
  }
  return (<div className="border-box flex justify-center overflow-hidden w-full min-w-0 h-sub-nav pd-t-8">
    <div className="flex flex-d-col bg-white border-r-3 w-full lg-max-w-1200px shadow-0-1-3-gray">
      <div className="flex gap-2 border-b-1px-gray pd-4 pd-t-6">
        <div className="grow flex items-center">
        <input type="text" className="border-none grow outline-none" id="md-editor-title" 
          placeholder="请输入标题"
          value={title} onChange={handleTitleChange} />
        </div>
        <div className="flex gap-6">
          <button className="app-btn btn-light-gray">取消</button>
          <button className="app-btn btn-green">确定</button>
        </div>
      </div>
      <MDEditor
        value={value}
        toolbars={defaultToolBars}
        keyCodeToolbars={KeyCodeToolBars}
      />
    </div>
  </div>);
}

export default Editor;