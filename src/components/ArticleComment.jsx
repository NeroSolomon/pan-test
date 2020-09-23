import React, { useState } from "react";
import { Button } from "antd";
import style from "../containers/css/content.module.scss";
import Comment from "./Comment.jsx";

function ArticleComment(props) {
  const [isActive, setIsActive] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [like, setLike] = useState(200);

  function toggleLike(props) {
    if (isActive) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setIsActive(!isActive);
  }

  function toggleComment() {
    setShowComment(!showComment);
  }

  function onReply() {
    props.onReply();
  }

  return (
    <div className={style["comment__container"]}>
      <div className={style["comment__auther-pic"]} />
      <div className={style["comment__auther-name"]}>Animals Lover</div>
      <div
        className={
          style["comment__like"] +
          " " +
          (isActive ? style["comment__like--active"] : "")
        }
        onClick={toggleLike}
      ></div>
      <div className={style["comment__detail"]}>
        <div className={style["comment__detail-info"]}>
          <div>
            <span>6 天</span>
            <span>{like} 次赞</span>
            <span
              style={{ cursor: "pointer", fontWeight: "bold" }}
              onClick={onReply}
            >
              回复
            </span>
          </div>
          <div style={{ fontWeight: "bold", marginTop: "10px" }}>
            <Button
              className={style["comment__detail-btn"]}
              type="link"
              onClick={toggleComment}
            >
              {showComment ? "隐藏回复" : "查看回复（12）"}
            </Button>
          </div>
        </div>
      </div>
      {showComment ? <Comment /> : null}
    </div>
  );
}

export default ArticleComment;
