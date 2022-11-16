import React from "react";
import { useState } from "react";
// import MDEditor from "@uiw/react-md-editor";
import MDEditor from "./MDEditor.jsx"
import "./Editor.css";
import defaultToolBars, { KeyCodeToolBars } from "./tools/defaultToolbar";

function Editor(props) {
  // value 是传入Editor的md内容
  const [value] = useState(() => { return props.value ? props.value : "" });
  const [title, setTitle] = useState(() => { return props.title ? props.title : "" });
  const handleTitleChange = (e) => {
    const TitleElement = document.querySelector("#md-editor-title");
    setTitle(TitleElement.value);
  }
  return (<div className="md-editor-page-container">
    <div className="md-editor-page-top">
      <input type="text" id="md-editor-title" value={title} onChange={handleTitleChange} />
      <button className="btn btn-light" style={{ marginRight: "3rem" }}>取消</button>
      <button className="btn btn-success">确定</button>
    </div>
    <MDEditor
      value={value}
      toolbars={defaultToolBars}
      keyCodeToolbars={KeyCodeToolBars}
    />
  </div>);
}

export default Editor;