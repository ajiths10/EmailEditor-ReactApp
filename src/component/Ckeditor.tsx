import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";

const Ckeditor = () => {
  const [text, setText] = useState("");
  const handleChange = (event: any, editor: any) => {
    const data = editor.getData();
    setText(data);
  };

  return (
    <div className="App">
      <div className="editor">
        <CKEditor editor={ClassicEditor} data={text} onChange={handleChange} />
      </div>
      <div>
        <h2>Content</h2>
        <p>{parse(text)}</p>
      </div>
    </div>
  );
};

export default Ckeditor;
