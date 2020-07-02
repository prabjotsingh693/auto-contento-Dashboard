import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import { Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import "./editor.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Editior = (props) => {
  const [text, setText] = useState(" ");
  const quillFocused = useRef(null);
  const classes = useStyles();
  const {payload} = props

  useEffect(() => {
   
    setText(payload)
  }, [payload]);

  const handleChange = (content, delta, source, editor) => {
    setText(content);
  };

  const handleSave = ()=>{
      props.save(quillFocused.current.editor.getContents())
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: " center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ display: "inline" }}>Summery of Text</h2>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          className={classes.button}
          onClick={handleSave}
          startIcon={<Save />}
        >
          Save
        </Button>
      </div>

      <ReactQuill
        ref={quillFocused}
        className="editor"
        theme="snow"
        value={text}
        onChange={handleChange}
        modules={Editior.modules}
      />
    </>
  );
};

Editior.modules = {
  toolbar: {
    container: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: 'check' }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", "Normal", "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],
      // ['link', 'image','video'],
      ["clean", "citation"],
    ],
  },
  syntax: true,
};

export default Editior;
