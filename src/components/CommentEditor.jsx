import React from "react";
import { Input } from "antd";
import style from "./css/commentEditor.module.scss";
const { TextArea } = Input;

function CommentEditor() {
  return (
    <div style={{ height: "99px", position: "relative" }}>
      <TextArea bordered={false} style={{ height: "100%", resize: "none" }} />
      <span className={style["editor__send-btn"]}>发布</span>
    </div>
  );
}

export default CommentEditor;
