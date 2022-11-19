import React from "react";
import { useState, useEffect } from "react";
import MDEditor from "./MDEditor.jsx"
import defaultToolBars, { KeyCodeToolBars } from "./tools/defaultToolbar";

function Editor(props) {
  useEffect(() => {
    const handler = (e) => { e.preventDefault(); }
    window.addEventListener("scroll", handler);
    return function () { window.removeEventListener("scroll", handler); }
  }, []);
  // value 是传入Editor的md内容
  const [value] = useState(() => { return props.value ? props.value : "" });
  const [title, setTitle] = useState(() => { return props.title ? props.title : "" });
  const handleTitleChange = (e) => {
    const TitleElement = document.querySelector("#md-editor-title");
    setTitle(TitleElement.value);
  }

  return (
    <div className="editor-container border-box flex flex-d-col bg-white w-full shadow-0-1-3-gray border-r-3">
      <div className="editor-top flex border-box gap-2 grow-0 border-b-1px-gray pd-4 pd-t-6">
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
  );
}

export default Editor;