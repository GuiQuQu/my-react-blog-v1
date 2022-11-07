import React from "react";
import MDEditor from '@uiw/react-md-editor';


function Editor() {
  const [value, setValue] = React.useState("**ABC**");
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}

export default Editor;