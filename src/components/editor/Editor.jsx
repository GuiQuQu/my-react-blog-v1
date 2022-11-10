import React from "react";
import { useState } from "react";
// import MDEditor from "@uiw/react-md-editor";
import MDEditor from "./MDEditor.jsx"
import "./Editor.css";

/**
 * 传给props的参数
 * 确定css的类名
 * - containerClass
 * - textareaContainerClass
 * - toolbarClass
 * - previewContainerClass
 * 定制化的工具栏
 * - custom tools
 * 
 * **/

function Editor(props) {
  // value 是传入Editor的md内容
  const [value] = useState(() => { return props.value ? props.value : "" });

  return (
    <React.Fragment>
      <div className="md-editor-page-top">
        <h3>{props.title}</h3>
        <button className="btn btn-light" style={{ marginRight: "2rem" }}>取消</button>
        <button className="btn btn-success">确定</button>
      </div>
      <MDEditor
        ContainerClass="container"
        value={value}
      />
    </React.Fragment>);
}

export default Editor;